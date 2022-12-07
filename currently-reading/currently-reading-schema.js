import mongoose from 'mongoose';

const currentlyReadingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    bookID: { type: String, required: true },
  },
  { collection: 'currently-reading' }
);

export default currentlyReadingSchema;
