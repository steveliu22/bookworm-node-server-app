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

  const deleteCurrentlyReading = async (req, res) => {
    const crid = req.params.crid;
    const status = await currentlyReadingDao.deleteCurrentlyReading(crid);
    res.json(status);
  };

  app.post('/currentlyReading', createCurrentlyReading);
  app.get('/users/:user/currentlyReading', findUserCurrentlyReading);
  app.delete('/currentlyReading/:crid', deleteCurrentlyReading);
};

export default CurrentlyReadingController;
