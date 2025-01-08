const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { io: clientIo } = require('socket.io-client'); // Import socket.io-client

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Connect Server 2 as a client to Server 1
const server1Socket = clientIo('http://localhost:4000'); // Connect to Server 1

server1Socket.on('connect', () => {
  console.log('Server 2 connected to Server 1');
});

// Listen for messages from Server 1
server1Socket.on('toServer2', (data) => {
  console.log('Message received on Server 2 from Server 1:', data);
});

io.on('connection', (socket) => {
  console.log('Client connected to Server 2:', socket.id);
});

server.listen(5000, () => {
  console.log('Server 2 is running on http://localhost:5000');
});
