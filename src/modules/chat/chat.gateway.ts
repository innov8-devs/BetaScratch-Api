import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
// import { ChatService } from './chat.service';
// import { CreateChatDto } from './dto/create-chat.dto';
// import { UpdateChatDto } from './dto/update-chat.dto';

const storage = new Map();
const rooms = ['football', 'volleyball', 'backetball'];

let previous_messages: any = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

let user_list: any = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

let online_user = {
  [rooms[0]]: 0,
  [rooms[1]]: 0,
  [rooms[2]]: 0,
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
      if (previous_messages[user.room].lenth === 50) {
        previous_messages[user.room][49] = message_object;
      } else {
        previous_messages[user.room].push(message_object);
      }
      socket.broadcast.to(user.room).emit('new-message', message_object);
    } else {
      socket.emit('unauthorized');
    }
  }

  @SubscribeMessage('join-room')
  joinRoom(
    @MessageBody('username') username: string,
    @MessageBody('room') room: string,
    @MessageBody('access_token') access_token: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    let auth = 1;
    // validate token here
    if (access_token) {
      auth = 2;
    }

    storage.set(socket.id, { auth, room, username, id: socket.id });

    if (user_list[room].findIndex((user: any) => user === username) < 0) {
      user_list[room].push(username ? username : 'unknown');
      online_user[room]++;
    }

    socket.to(room).emit('online-users', storage.size);
  }

  @SubscribeMessage('search')
  search(
    @MessageBody('username') username: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const user = storage.get(socket.id);
    if (user) {
      socket.emit(
        'user-list',
        user_list[user.room].filter(
          (each: any) => each.startsWith(username) && each != user.username,
        ),
      );
    }
  }

  @SubscribeMessage('disconnect')
  disconnect(@ConnectedSocket() socket: Socket): void {
    const user = storage.get(socket.id);
    const index = user_list[user.room].findIndex(
      (each: any) => each === user.username,
    );
    if (index > -1) {
      user_list[user.room].splice(index, 1);
      online_user[user.room]--;
    }
    storage.delete(user.id);
    socket.to(user.room).emit('online-users', storage.size);
  }
}
