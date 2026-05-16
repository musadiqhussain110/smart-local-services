import mongoose from 'mongoose';
import { ROLES } from '@serviceshub/shared';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.CUSTOMER }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
