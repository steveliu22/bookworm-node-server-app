import mongoose from 'mongoose';

const usersSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    birthday: { type: String },
    phoneNumber: { type: String },
    email: String,
    role: { type: String, enum: ['REVIEWER', 'AUTHOR'] },
    profilePicture: String,
  },
  { collections: 'users' }
);

export default usersSchema;
