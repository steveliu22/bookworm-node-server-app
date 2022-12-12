import meetingsModel from './meetings-model.js';

export const createMeeting = async (meeting) =>
  await meetingsModel.create(meeting);

export const findMeetings = async () =>
  await meetingsModel.find().populate('user').exec();

export const findMeetingsByUser = async (user) =>
  await meetingsModel.find({ user }).populate('user').exec();

export const deleteMeeting = async (mid) =>
  await meetingsModel.deleteOne({ _id: mid });
