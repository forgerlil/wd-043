import express from 'express';
import {
  oneOwner,
  loginUser,
  registerUser,
} from '../controllers/authControllers.js';
import verifyToken from '../middlewares/verifyToken.js';
import bodyValidation from '../middlewares/bodyValidation.js';
import { loginSchema, registrationSchema } from '../lib/joiSchemas.js';

const authRouter = express.Router();

authRouter.use(express.json());

authRouter.route('/login').post(bodyValidation(loginSchema), loginUser);
authRouter
  .route('/register')
  .post(bodyValidation(registrationSchema), registerUser);
authRouter.route('/me').get(verifyToken, oneOwner);

export default authRouter;
