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

io.use(async (socket, next) => {
  socket.on('send-message', async () => {
    if (!socket.authenticated) {
      return next(new Error('User not found'));
    }
  });
});

//verify access_token dummy function
const verifyToken = (access_token) => true;

io.on('connection', (socket) => {
  socket.on('join-room', async (room, username, access_token) => {
    if (verifyToken(access_token) && rooms.includes(room)) {
      socket.join(room);
      socket.username = username;
      socket.roomID = room;
      socket.authenticated = true;
      if (user_list[room].findIndex((user) => user === username) < 0) {
        user_list[room].push(username);
        online_user[room]++;
      }
      io.to(room).emit('online', online_user[room]);
      io.to(room).emit('previous_messages', previous_messages[room]);
    } else {
      socket.emit('error', 'Could not join : ' + room);
    }
  });

  socket.on('send-message', (message_object) => {
    if (previous_messages[socket.roomID].lenth === 50) {
      previous_messages[socket.roomID][0] = message_object;
    } else {
      previous_messages[socket.roomID].push(message_object);
    }
    socket.broadcast.to(socket.roomID).emit('new-message', message_object);
  });

  socket.on('search', async (username) => {
    socket.emit(
      'user-list',
      user_list[socket.roomID].filter(
        (user) => user.startsWith(username) && user != socket.username,
      ),
    );
  });

  socket.on('disconnect', () => {
    const index = user_list[socket.roomID].findIndex(
      (user) => user === socket.username,
    );
    if (index > -1) {
      user_list[socket.roomID].splice(index, 1);
      online_user[socket.roomID]--;
      io.to(socket.roomID).emit('online', online_user[socket.roomID]);
    }
  });
});

httpServer.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`),
);
