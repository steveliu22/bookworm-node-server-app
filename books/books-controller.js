import * as booksDao from './books-dao.js';

const BooksController = (app) => {
  const findAllBooks = async (req, res) => {
    const books = await booksDao.findAllBooks();
    res.json(books);
  };
  const createBook = async (req, res) => {
    const newBook = req.body;
    const actualBook = await booksDao.createBook(newBook);
    res.json(actualBook);
  };

  const updateBook = async (req, res) => {
    const bid = req.params.bid;
    const bookUpdates = req.body;
    const status = await booksDao.createBook(bid, bookUpdates);
    res.send(status);
  };

  const deleteBook = async (req, res) => {
    const bid = req.params.bid;
    const status = booksDao.deleteBook(bid);
    res.send(status);
  };

  const findBookByID = async (req, res) => {
    const bid = req.params.bid;
    const book = await booksDao.findBookByID(bid);
    res.json(book);
  };

  app.get('/books', findAllBooks);
  app.get('/books/:bid', findBookByID);
  app.post('/books', createBook);
  app.put('/books/:bid', updateBook);
  app.delete('/books/:bid', deleteBook);
};

export default BooksController;
