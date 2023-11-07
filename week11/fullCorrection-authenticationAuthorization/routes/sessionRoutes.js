import express from 'express';
import session from 'express-session';
import {
  setUser,
  serveUser,
  loginForm,
  registerForm,
  registerUser,
  connectUser,
  adminPage,
  logoutUser,
} from '../controllers/sessionControllers.js';

const sessionRouter = express.Router();

sessionRouter.use(
  session({
    secret: 'wd043',
    resave: false,
    saveUninitialized: true,
  })
);

/* ----- Exercise 1 ----- */
sessionRouter.route('/setname').get(setUser);
sessionRouter.route('/getname').get(serveUser);

/* ----- Exercise 2 ----- */
sessionRouter.route('/login').get(loginForm);
sessionRouter
  .route('/connect')
  .post(express.urlencoded({ extended: true }), connectUser);
sessionRouter.route('/admin').get(adminPage);
sessionRouter.route('/logout').get(logoutUser);

/* ----- Exercise 4 ----- */
sessionRouter
  .route('/register')
  .get(registerForm)
  .post(express.urlencoded({ extended: true }), registerUser);

export default sessionRouter;
