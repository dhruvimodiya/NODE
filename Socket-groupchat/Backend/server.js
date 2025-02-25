const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

// configure socket.io to allow cross-origin requests
const io = require('socket.io')(server, { cors: { origin: '*' } });

// set up our PORT
const MY_PREFERRED_PORT = 8000;
const PORT = process.env.PORT || MY_PREFERRED_PORT;

// allow cors
app.use(cors());

// on socket connection
io.on('connection', (socket) => {
  // get active or connected socket
  socket.emit('activeUsers');

  // get socket id of connected socket
  socket.emit('getId', socket.id);

  // when a chat event is emitted 
  socket.on('chat', (id, chat) => {
    io.emit('sendChat', id, chat, socket.id);
  });

  // when a user changes their username
  socket.on('usernameChange', (username, socketid) => {
    socket.broadcast.emit('resetChat', username, socketid);
  });

  // when a user is Typing
  socket.on('userTyping', (socketid, type) => {
    socket.broadcast.emit('someoneTyping', socketid, type);
  });

  // get all connected sockets
  socket.on('activeUsers', () => {
    // gets all connected sockets
    const onlineUsers = io.engine.clientsCount;
    io.emit('countUsers', onlineUsers);
  });

  // when a socket gets disconnected
  socket.on('disconnect', () => {
    socket.broadcast.emit('disconnectNotification', socket.id);
    const onlineUsers = io.engine.clientsCount;
    socket.broadcast.emit('countUsers', onlineUsers);
  });
});

server.listen(PORT, () => {
  console.log(`Application running successfully on port: ${PORT}`);
});