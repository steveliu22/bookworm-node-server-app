import mongoose from 'mongoose';
import currentlyReadingSchema from './currently-reading-schema.js';

const currentlyReadingModel = mongoose.model(
  'currently-reading',
  currentlyReadingSchema
);

export default currentlyReadingModel;
