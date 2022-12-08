import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import UsersController from './users/users-controller.js';
import SessionController from './session-controller.js';
import BooksController from './books/books-controller.js';
import ReviewsController from './reviews/reviews-controller.js';
import ImagesController from './image-api/images-controller.js';
import CurrentlyReadingController from './currently-reading/currently-reading-controller.js';

const CONNECTION_STRING = process.env.BOOKWORM_DB_CONNECTION_STRING;

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
  name: 'bookworm',
  cookie: {
    secure: false, // required for cookies to work on HTTPS
    httpOnly: false,
    sameSite: 'none',
  },
};

if (process.env.ENV === 'production') {
  currSession.cookie.secure = true;
}

console.log(currSession.cookie.secure);

app.use('/images', express.static('images'));

const origin = process.env.LIVE || 'http://localhost:3000';

app.use(
  cors({
    credentials: true,
    origin,
  })
);

app.use(session(currSession));
app.use(express.json());
UsersController(app);
SessionController(app);
BooksController(app);
ReviewsController(app);
ImagesController(app);
CurrentlyReadingController(app);
app.listen(process.env.PORT || 4000);
