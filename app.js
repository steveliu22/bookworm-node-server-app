import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import UsersController from './users/users-controller.js';
import SessionController from './session-controller.js';

const CONNECTION_STRING =
  process.env.BOOKWORM_DB_CONNECTION_STRING ||
  'mongodb://localhost:27017/bookworm';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

mongoose.connect(CONNECTION_STRING, options);
const app = express();
const currSession = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
};

if (process.env.ENV === 'production') {
  currSession.cookie.secure = true;
}

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(session(currSession));
app.use(express.json());
UsersController(app);
SessionController(app);
app.listen(process.env.PORT || 4000);
