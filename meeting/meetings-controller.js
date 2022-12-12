import * as meetingsDao from './meetings-dao.js';

const MeetingsController = (app) => {
  const createMeeting = async (req, res) => {
    const newMeeting = req.body;
    const actualMeeting = await meetingsDao.createMeeting(newMeeting);
    res.json(actualMeeting);
  };

  const findMeetings = async (req, res) => {
    const meetings = await meetingsDao.findMeetings();
    res.json(meetings);
  };

  const findMeetingsByUser = async (req, res) => {
    const user = req.params.uid;
    const meetings = await meetingsDao.findMeetingsByUser(user);
    res.json(meetings);
  };

  const deleteMeeting = async (req, res) => {
    const mid = req.params.mid;
    const status = await meetingsDao.deleteMeeting(mid);
    res.send(status);
  };

  app.post('/meetings', createMeeting);
  app.get('/meetings', findMeetings);
  app.get('/users/:uid/meetings', findMeetingsByUser);
  app.delete('/meetings/:mid', deleteMeeting);
};

export default MeetingsController;
