import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    description: { type: String },
    location: { type: String },
    time: { type: String },
  },
  { collection: 'meetings' }
);

export default meetingSchema;
