const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router=require('./router');
const app = express();
const server = http.createServer(app);

// Passing app to the server which we initialized with express
const io = socketio(server); // Passing instance of socket to the server
app.use(router);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
