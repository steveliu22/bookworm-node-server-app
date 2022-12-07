import currentlyReadingModel from './currently-reading-model.js';

export const createCurrentlyReading = (currentlyReading) =>
  currentlyReadingModel.create(currentlyReading);

export const findUserCurrentlyReading = (user) =>
  currentlyReadingModel.find({ user }).populate('user').exec();
