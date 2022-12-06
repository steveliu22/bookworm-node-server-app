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

  const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const userUpdates = req.body;
    const status = await userDao.updateUser(uid, userUpdates);
    res.send(status);
  };

  const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = userDao.deleteUser(uid);
    res.send(status);
  };

  const register = async (req, res) => {
    const user = req.body;
    if (!user.username) {
      res.sendStatus(403);
      return;
    }
    const existingUser = await userDao.findUserByUsername(user.username);
    if (existingUser && existingUser.length !== 0) {
      res.sendStatus(403);
      return;
    }
    const newUser = await userDao.createUser(user);
    req.session.currentUser = newUser;
    res.json(newUser);
  };

  const login = async (req, res) => {
    const credentials = req.body;
    const existingUsers = await userDao.findUserByCredentials(
      credentials.username,
      credentials.password
    );
    if (existingUsers && existingUsers.length !== 0) {
      req.session.currentUser = existingUsers[0];
      res.json(existingUsers[0]);
    } else {
      res.sendStatus(403);
    }
  };

  const logout = async (req, res) => {
    req.session.currentUser = null;
    res.sendStatus(200);
  };

  const profile = async (req, res) => {
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
