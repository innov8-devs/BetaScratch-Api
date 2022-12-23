import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import jwtDecode from 'jwt-decode';
import { timezoneToDate } from 'utils/date.util';

const storage = new Map();
const rooms = ['competition', 'predict and win', 'chatroom'];

let previous_messages: any = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

let user: { auth: number; room: string; username: string; id: string };

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  handleConnection() {
    console.log('socket connected');
  }

  handleTip(data: {
    amount: number;
    to: string;
    from: string;
    type: string;
    time: string;
  }): void {
    this.server.emit('tip', data);
    previous_messages[rooms[0]].push(data);
    previous_messages[rooms[1]].push(data);
    previous_messages[rooms[2]].push(data);
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(
    @MessageBody()
    data: { room: string; username?: string; access_token?: string },
    @ConnectedSocket() socket: Socket,
  ): void {
    let auth = 1;
    const { room, username, access_token } = data;
    try {
      let decoded: { sub: number; iat: number; exp: number; isAdmin: boolean } =
        jwtDecode(access_token);

      if (!access_token || Date.now() >= decoded.exp * 1000) auth = 1;
      else auth = 2;
    } catch (err) {
      auth = 1;
    }
    user = storage.get(socket.id);
    if (user) socket.leave(user.room);
    storage.set(socket.id, { auth, room, username, id: socket.id });
    socket.join(room);
    this.server.to(room).emit('online-users', storage.size);
    socket.emit('old-room-messages', previous_messages[room]);
  }

  @SubscribeMessage('send-message')
  handleSendMessage(
    @MessageBody() message_object: any,
    @ConnectedSocket() socket: Socket,
  ) {
    console.log('MESSAGE OBJECT', message_object);

    user = storage.get(socket.id);

    message_object.timezone
      ? (message_object.time = timezoneToDate(message_object.timezone))
      : (message_object.time = null);

    if (user && user?.auth === 2) {
      if (previous_messages[user.room].lenth === 50) {
        previous_messages[user.room].shift();
        previous_messages[user.room].push(message_object);
      } else {
        previous_messages[user.room].push(message_object);
      }
      socket.broadcast.to(user.room).emit('new-message', message_object);
    } else {
      socket.emit('error', 'login to send messages');
    }
  }

  @SubscribeMessage('search')
  handleSearch(
    @MessageBody() data: { text: string },
    @ConnectedSocket() socket: Socket,
  ) {
    let username = data.text;
    user = storage.get(socket.id);
    if (user) {
      let arrayOfUsers = [];
      for (let [_key, value] of storage) {
        if (
          value.room === user.room &&
          value.username !== user.username &&
          value.username !== 'anonymous' &&
          value.username.startsWith(username)
        ) {
          arrayOfUsers.push(value);
        }
      }
      socket.emit('reference', arrayOfUsers);
    }
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    user = storage.get(socket.id);
    if (user) {
      storage.delete(socket.id);
      this.server.to(user.room).emit('online-users', storage.size);
    }
  }
}
