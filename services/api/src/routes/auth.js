import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { User } from '../models/user.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/tokens.js';

export const authRouter = Router();

authRouter.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(409).json({ message: 'Email already in use' });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash, role });
  return res.status(201).json({ id: user.id, email: user.email, role: user.role });
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const payload = { sub: user.id, role: user.role };
  return res.json({
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload)
  });
});

authRouter.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ message: 'refreshToken is required' });
  }
  try {
    const decoded = verifyRefreshToken(refreshToken);
    return res.json({
      accessToken: signAccessToken({ sub: decoded.sub, role: decoded.role })
    });
  } catch {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
});
