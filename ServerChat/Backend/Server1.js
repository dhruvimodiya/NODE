const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected to Server 1:', socket.id);

  // Listen for messages from the React client
  socket.on('sendToServer2', (data) => {
    console.log('Message received on Server 1:', data);

    // Emit the message to connected clients (including Server 2)
    io.emit('toServer2', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected from Server 1:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server 1 is running on http://localhost:4000');
});
