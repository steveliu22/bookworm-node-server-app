import booksModel from './books-model.js';

export const createBook = async (book) => await booksModel.create(book);

export const findAllBooks = async () => await booksModel.find();

export const deleteBook = async (bid) =>
  await booksModel.deleteOne({ _id: bid });

export const updateBooks = async (bid, bookUpdates) =>
  await booksModel.updateOne({ _id: bid }, { $set: bookUpdates });

export const findBooksBySearch = async (search) =>
  await booksModel
    .find({ title: new RegExp(search, 'i') })
    .populate('author')
    .exec();

export const findBookByID = async (bid) =>
  await booksModel.find({ _id: bid }).populate('author').exec();

export const findBooksByAuthor = async (user) =>
  await booksModel.find({ author: user }).populate().exec();
