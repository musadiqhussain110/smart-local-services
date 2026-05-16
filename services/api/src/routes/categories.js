import { DEFAULT_CATEGORIES } from '@serviceshub/shared';
import { Router } from 'express';
import { Category } from '../models/category.js';
import { authRequired, requireRole } from '../middleware/auth.js';

export const categoriesRouter = Router();

categoriesRouter.get('/', async (_req, res) => {
  const count = await Category.countDocuments();
  if (count === 0) {
    await Category.insertMany(DEFAULT_CATEGORIES.map((name) => ({ name })), { ordered: false });
  }
  const categories = await Category.find().sort({ name: 1 });
  return res.json(categories);
});

categoriesRouter.post('/', authRequired, requireRole('admin'), async (req, res) => {
  const category = await Category.create({ name: req.body.name });
  return res.status(201).json(category);
});
