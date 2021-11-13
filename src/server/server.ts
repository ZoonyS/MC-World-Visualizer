import * as express from 'express';
import * as socketio from 'socket.io'
import * as path from 'path'

import apiRouter from './routes';

import { bot, lookAtNearestPlayer, getBlockData } from './services/mineflayer/bot'

const app = express();
const port = process.env.PORT || 3000;

app.set("port", port);
app.use(express.static('public'));
app.use(apiRouter);

let http = require("http").Server(app)
let io = require("socket.io")(http);

io.on("connection", (socket: socketio.Socket) => {
        socket.on("lookAtNearestPlayer", (message: string) => {
        bot.on('physicTick', lookAtNearestPlayer)
    })

    socket.on("getBlockData", () => {
        const BlockData = getBlockData(bot, 16, 55, 16)
        socket.emit("setBlockData", (BlockData))
    })
}) 

const server = http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});