import mongoose from 'mongoose';
import { BOOKING_STATUSES } from '@serviceshub/shared';

const bookingSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    notes: { type: String },
    status: {
      type: String,
      enum: Object.values(BOOKING_STATUSES),
      default: BOOKING_STATUSES.PENDING
    }
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', bookingSchema);
