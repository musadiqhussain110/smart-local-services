import { Router } from 'express';
import { BOOKING_STATUSES } from '@serviceshub/shared';
import { authRequired, requireRole } from '../middleware/auth.js';
import { Booking } from '../models/booking.js';

/** @param {import('socket.io').Server} io */
export function createBookingsRouter(io) {
  const bookingsRouter = Router();

  bookingsRouter.post('/', authRequired, requireRole('customer'), async (req, res) => {
    const { categoryId, providerId, lat, lng, notes } = req.body;
    const booking = await Booking.create({
      customerId: req.user.sub,
      providerId,
      categoryId,
      notes,
      location: { type: 'Point', coordinates: [Number(lng), Number(lat)] }
    });
    return res.status(201).json(booking);
  });

  bookingsRouter.get('/my', authRequired, async (req, res) => {
    const key = req.user.role === 'customer' ? 'customerId' : 'providerId';
    const bookings = await Booking.find({ [key]: req.user.sub }).sort({ createdAt: -1 });
    return res.json(bookings);
  });

  bookingsRouter.put('/:id/status', authRequired, requireRole('provider'), async (req, res) => {
    const status = req.body.status;
    if (!Object.values(BOOKING_STATUSES).includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    io.emit('booking:status_update', { bookingId: booking.id, status });
    return res.json(booking);
  });

  return bookingsRouter;
}
