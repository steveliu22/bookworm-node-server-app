import mongoose from 'mongoose';

const usersSchema = mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: { type: String, enum: ['ADMIN', 'REVIEWER', 'AUTHOR'] },
    firstName: String,
    lastName: String,
  },
  { collections: 'users' }
);

export default usersSchema;
