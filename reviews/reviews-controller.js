import * as reviewsDao from './reviews-dao.js';

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const session = req.session;
    const user = session.currentUser;
    review.user = user._id;
    const dbReview = await reviewsDao.createReview(review);
    res.json(dbReview);
  };

  const findReviewsByBook = async (req, res) => {
    const bid = req.params.bid;
    const reviews = await reviewsDao.findReviewsByBook(bid);
    res.json(reviews);
  };

  const findReviewsByAuthor = async (req, res) => {
    const author = req.params.author;
    const reviews = await reviewsDao.findReviewsByAuthor(author);
    res.json(reviews);
  };

  app.post('/reviews', createReview);
  app.get('/books/:bid/reviews', findReviewsByBook);
  app.get('/users/:author/reviews', findReviewsByAuthor);
};

export default ReviewsController;
