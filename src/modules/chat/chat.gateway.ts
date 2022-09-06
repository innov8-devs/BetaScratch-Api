import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import jwt_decode from 'jwt-decode';
// import { ChatService } from './chat.service';
// import { CreateChatDto } from './dto/create-chat.dto';
// import { UpdateChatDto } from './dto/update-chat.dto';

const storage = new Map();
const rooms = ['competition', 'scratch and win', 'chatroom'];

let previous_messages: any = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send-message')
  handleMessage(
    @MessageBody() message_object: any,
    @ConnectedSocket() socket: Socket,
  ): void {
    const user = storage.get(socket.id);
    if (user && user?.auth === 2) {
      if (previous_messages[user.room].length === 50) {
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

  @SubscribeMessage('join-room')
  joinRoom(
    @MessageBody('room') room: string,
    @MessageBody('username') username: string,
    @MessageBody('access_token') access_token: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    let auth = 1;

    try {
      let decoded: { sub: number; iat: number; exp: number; isAdmin: boolean } =
        jwt_decode(access_token);

      if (!access_token || Date.now() >= decoded.exp * 1000) auth = 1;
      else auth = 2;
    } catch (err) {
      auth = 1;
    }

    const user = storage.get(socket.id);
    if (user) socket.leave(user.room);

    storage.set(socket.id, { auth, room, username, id: socket.id });
    socket.join(room);
    this.server.to(room).emit('online-users', storage.size);
    socket.emit('old-room-messages', previous_messages[room]);
  }

  @SubscribeMessage('search')
  search(
    @MessageBody('username') username: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const user = storage.get(socket.id);
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

  @SubscribeMessage('disconnect')
  disconnect(@ConnectedSocket() socket: Socket): void {
    const user = storage.get(socket.id);
    if (user) {
      storage.delete(socket.id);
      this.server.to(user.room).emit('online-users', storage.size);
    }
  }

  // @SubscribeMessage('tip')
  // tip(@ConnectedSocket() socket: Socket, @MessageBody() data: any): void {
  //   const user = storage.get(socket.id);
  //   if (user) {
  //     storage.delete(socket.id);
  //     socket.to(rooms).emit('tip', data);
  //   }
  // }
}
