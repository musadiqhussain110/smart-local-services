import cors from 'cors';
import express from 'express';
import { authRouter } from './routes/auth.js';
import { categoriesRouter } from './routes/categories.js';
import { providersRouter } from './routes/providers.js';
import { createBookingsRouter } from './routes/bookings.js';

/** @param {import('socket.io').Server} io */
export function createApp(io) {
  const app = express();
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
  app.use(express.json());

  app.get('/health', (_req, res) => res.json({ ok: true }));

  app.use('/api/auth', authRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/providers', providersRouter);
  app.use('/api/bookings', createBookingsRouter(io));

  return app;
}
