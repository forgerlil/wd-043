import express from 'express';
import {
  loginPage,
  registerPage,
  registerUser,
  adminPage,
  connectUser,
  logoutUser,
} from '../controllers/jwtControllers.js';
import validateToken from '../middlewares/validateToken.js';

const jwtRouter = express.Router();

/* ----- Exercise 3 ----- */
jwtRouter.route('/login').get(loginPage);
jwtRouter.route('/logout').get(logoutUser);
jwtRouter
  .route('/connect')
  .post(express.urlencoded({ extended: true }), connectUser);
jwtRouter
  .route('/checkJWT')
  // .post(express.urlencoded({ extended: true }), verifyToken)
  /* ----- Exercise 5 ----- */
  .post(express.urlencoded({ extended: true }), validateToken, adminPage);

/* ----- Exercise 4 ----- */
jwtRouter
  .route('/register')
  .get(registerPage)
  .post(express.urlencoded({ extended: true }), registerUser);

export default jwtRouter;
