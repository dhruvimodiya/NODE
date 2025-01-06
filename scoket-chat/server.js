const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io'); 
const path = require('path');

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve('./public/index.html'));
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});