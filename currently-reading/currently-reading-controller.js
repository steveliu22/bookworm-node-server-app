import * as currentlyReadingDao from './currently-reading-dao.js';

const CurrentlyReadingController = (app) => {
  const createCurrentlyReading = async (req, res) => {
    const currentlyReading = req.body;
    const session = req.session;
    const user = session.currentUser;
    currentlyReading.user = user._id;
    const dbCurrentlyReading = await currentlyReadingDao.createCurrentlyReading(
      currentlyReading
    );
    res.json(dbCurrentlyReading);
  };

  const findUserCurrentlyReading = async (req, res) => {
    const user = req.params.user;
    const currentlyReadingBooks =
      await currentlyReadingDao.findUserCurrentlyReading(user);
    res.json(currentlyReadingBooks);
  };

  app.post('/currentlyReading', createCurrentlyReading);
  app.get('/users/:user/currentlyReading', findUserCurrentlyReading);
};

export default CurrentlyReadingController;
