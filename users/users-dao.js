import userModel from './user-model.js';

export const createUser = async (user) => await userModel.create(user);

export const findUserByUsername = async (username) =>
  await userModel.find({ username });

export const findUserByCredentials = async (username, password) =>
  await userModel.find({ username, password });

export const findAllUsers = async () => await userModel.find();

export const deleteUser = async (uid) =>
  await userModel.deleteOne({ _id: uid });

export const updateUser = async (uid, userUpdates) =>
  await userModel.updateOne({ _id: uid }, { $set: userUpdates });
