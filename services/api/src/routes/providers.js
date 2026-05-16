import { Router } from 'express';
import { authRequired, requireRole } from '../middleware/auth.js';
import { ProviderProfile } from '../models/provider-profile.js';

export const providersRouter = Router();

providersRouter.post('/register', authRequired, requireRole('provider'), async (req, res) => {
  const { categoryId, lat, lng, serviceRadiusKm } = req.body;
  const profile = await ProviderProfile.findOneAndUpdate(
    { userId: req.user.sub },
    {
      userId: req.user.sub,
      categoryId,
      serviceRadiusKm: serviceRadiusKm || 10,
      location: { type: 'Point', coordinates: [Number(lng), Number(lat)] }
    },
    { upsert: true, new: true }
  );
  return res.status(201).json(profile);
});

providersRouter.get('/nearby', async (req, res) => {
  const { lat, lng, categoryId } = req.query;
  const providers = await ProviderProfile.find({
    ...(categoryId ? { categoryId } : {}),
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [Number(lng), Number(lat)]
        },
        $maxDistance: 10000
      }
    }
  })
    .limit(20)
    .populate('userId', 'name email');

  return res.json(providers);
});
