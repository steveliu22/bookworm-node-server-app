import mongoose from 'mongoose';
import meetingSchema from './meetings-schema.js';

const meetingsModel = mongoose.model('meetings', meetingSchema);

export default meetingsModel;
