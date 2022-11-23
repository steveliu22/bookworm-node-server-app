import mongoose from 'mongoose';
import usersSchema from './users-schema.js';

const userModel = mongoose.model('users', usersSchema);

export default userModel;
