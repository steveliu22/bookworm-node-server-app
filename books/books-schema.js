import mongoose from 'mongoose';

const booksSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    authors: [{ type: String }],
    description: { type: String },
    coverImage: { type: String },
    isbn: { type: String },
  },
  { collection: 'books' }
);

export default booksSchema;
