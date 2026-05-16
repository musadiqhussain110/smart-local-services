import mongoose from 'mongoose';

const providerProfileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
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
    serviceRadiusKm: { type: Number, default: 10 },
    isApproved: { type: Boolean, default: false }
  },
  { timestamps: true }
);

providerProfileSchema.index({ location: '2dsphere' });

export const ProviderProfile = mongoose.model('ProviderProfile', providerProfileSchema);
