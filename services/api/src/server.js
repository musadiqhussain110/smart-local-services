import 'dotenv/config';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { createApp } from './app.js';
import { connectDB } from './config/db.js';

const port = Number(process.env.PORT || 4000);
await connectDB(process.env.MONGO_URI);

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_ORIGIN || '*' }
});

const app = createApp(io);
httpServer.on('request', app);

io.on('connection', (socket) => {
  socket.on('provider:location_update', (payload) => {
    io.emit('provider:location_update', payload);
  });
});

httpServer.listen(port, () => {
  console.log(`API listening on ${port}`);
});
