import mongoose from 'mongoose';

const reviewsSchema = mongoose.Schema(
  {
    review: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    bookID: { type: String, required: true },
  },
  { collection: 'reviews' }
);

export default reviewsSchema;
