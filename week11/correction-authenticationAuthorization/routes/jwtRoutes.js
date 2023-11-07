import express from 'express';
import {
  loginPage,
  connectUser,
  adminPage,
} from '../controllers/jwtControllers.js';

const jwtRouter = express.Router();

jwtRouter.route('/login').get(loginPage);
jwtRouter
  .route('/connect')
  .post(express.urlencoded({ extended: true }), connectUser);
jwtRouter
  .route('/checkJWT')
  .post(express.urlencoded({ extended: true }), adminPage);

export default jwtRouter;
