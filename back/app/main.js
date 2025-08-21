import { Server } from "socket.io";
import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173', 'http://localhost.proxyman.io:5173'],
        // methods: ['GET', 'POST'],
        credentials: true
    },
})

// console.log(Server)

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    // console.log(socket)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})