import mongoose from 'mongoose';

const booksSchema = mongoose.Schema({
  title: { type: String, required: true },
  liked: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  authors: [{ type: String }],
  description: { type: String },
  coverImage: { type: String },
});

export default booksSchema;
