import mongoose from 'mongoose';

const booksSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    description: { type: String },
    coverImage: { type: String },
    isbn: { type: String },
    publisher: { type: String },
    categories: [{ type: String }],
    publishDate: { type: String },
  },
  { collection: 'books' }
);

export default booksSchema;
