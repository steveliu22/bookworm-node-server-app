import reviewsModel from './reviews-model.js';

export const createReview = (review) => reviewsModel.create(review);

export const findAllReviews = () => reviewsModel.find();

export const findReviewsByBook = (bid) =>
  reviewsModel.find({ bookID: bid }).populate('user').exec();

export const findReviewsByAuthor = (user) =>
  reviewsModel.find({ user }).populate('user').exec();
