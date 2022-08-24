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

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send-message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('new-message', message);
  }

  @SubscribeMessage('join-room')
  joinRoom(
    @MessageBody('username') username: string,
    @MessageBody('room') room: string,
    @MessageBody('access_token') access_token: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const rooms = ['football', 'volleyball', 'backetball'];
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

    let previous_messages: any = {
      [rooms[0]]: [],
      [rooms[1]]: [],
      [rooms[2]]: [],
    };

    if (access_token && rooms.includes(room)) {
      if (user_list[room].findIndex((user: any) => user === username) < 0) {
        user_list[room].push(username);
        online_user[room]++;
      }

      socket.join(room);
      socket.to(room).emit('online', online_user[room]);
      socket.to(room).emit('previous_messages', previous_messages[room]);
    } else {
      socket.emit('error', 'Could not join : ' + room);
    }
  }

  @SubscribeMessage('search')
  search(
    @MessageBody('username') username: string,
    @MessageBody('room') room: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const rooms = ['football', 'volleyball', 'backetball'];

    let user_list: any = {
      [rooms[0]]: [],
      [rooms[1]]: [],
      [rooms[2]]: [],
    };

    socket.emit(
      'user-list',
      user_list[room].filter(
        (user: any) => user.startsWith(username) && user != username,
      ),
    );
  }

  @SubscribeMessage('disconnect')
  disconnect(
    @MessageBody('username') username: string,
    @MessageBody('room') room: string,
    @ConnectedSocket() socket: Socket,
  ): void {
    const rooms = ['football', 'volleyball', 'backetball'];

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

    const index = user_list[room].findIndex((user: any) => user === username);
    if (index > -1) {
      user_list[room].splice(index, 1);
      online_user[room]--;
      socket.to(room).emit('online', online_user[room]);
    }
  }
}
