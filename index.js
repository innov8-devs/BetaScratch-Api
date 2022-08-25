import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const port = process.env.PORT || 5000;
const app = express();

const httpServer = createServer(app);
const rooms = ['football', 'volleyball', 'backetball'];

const io = new Server();
io.attach(httpServer, { origins: '*', cors: { origin: '*' } });

app.use(cors());

let previous_messages = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

let user_list = {
  [rooms[0]]: [],
  [rooms[1]]: [],
  [rooms[2]]: [],
};

let online_user = {
  [rooms[0]]: 0,
  [rooms[1]]: 0,
  [rooms[2]]: 0,
};

const storage = new Map();

io.on('connection', (socket) => {
  //username = username | undefined
  //username = access_token | undefined
  socket.on('join-room', async (room, username, access_token) => {
    let auth = 1;
    if (access_token) {
      auth = 2;
    }
    storage.set(socket.id, { auth, room, username, id: socket.id });
    if (user_list[room].findIndex((user) => user === username) < 0) {
      user_list[room].push(username ? username : 'unknown');
      online_user[room]++;
    }
    io.to(room).emit('online-users', storage.size);
  });

  socket.on('send-message', (message_object) => {
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
  });

  socket.on('search', async (username) => {
    const user = storage.get(socket.id);
    if (user) {
      socket.emit(
        'user-list',
        user_list[user.room].filter(
          (each) => each.startsWith(username) && each != user.username,
        ),
      );
    }
  });

  socket.on('disconnect', () => {
    const user = storage.get(socket.id);
    if (user) {
      const index = user_list[user.room].findIndex(
        (each) => each === user.username,
      );
      if (index > -1) {
        user_list[user.room].splice(index, 1);
        online_user[user.room]--;
      }
      storage.delete(user.id);
      io.to(user.room).emit('online-users', storage.size);
    }
  });
});
