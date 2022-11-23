import * as userDao from './users-dao.js';

const UsersController = (app) => {
  const findAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers();
    res.json(users);
  };
  const createUser = async (req, res) => {
    const newUser = req.body;
    const actualUser = await userDao.createUser(newUser);
    res.json(actualUser);
  };

  const updateUser = () => {};

  const deleteUser = () => {};

  const register = async (req, res) => {
    const user = req.body;
    if (!user.username) {
      res.sendStatus(403);
      return;
    }
    const existingUser = await userDao.findUserByUsername(user.username);
    if (existingUser) {
      res.sendStatus(403);
      return;
    }
    const newUser = await userDao.createUser(user);
    req.session.currentUser = newUser;
    res.json(newUser);
  };

  const login = async (req, res) => {
    const credentials = req.body;
    const existingUser = await userDao.findUserByCredentials(
      credentials.username,
      credentials.password
    );
    if (existingUser) {
      req.session.currentUser = existingUser;
      res.json(existingUser);
    } else {
      res.sendStatus(403);
    }
  };

  const logout = (req, res) => {
    req.session.currentUser = null;
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    if (req.session.currentUser) {
      res.send(req.session.currentUser);
    } else {
      res.sendStatus(403);
    }
  };

  app.get('/users', findAllUsers);
  app.post('/users', createUser);
  app.put('/users/:uid', updateUser);
  app.delete('/users/:uid', deleteUser);

  app.post('/register', register);
  app.post('/login', login);
  app.post('/logout', logout);
  app.post('/profile', profile);
};

export default UsersController;
