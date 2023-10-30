import express from 'express';
import {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js';
import { body, validationResult } from 'express-validator';

const userRouter = express.Router();

userRouter
  .route('/')
  .get(getAllUsers)
  .post(
    express.json(),
    body('first_name')
      .isAlpha()
      .withMessage('First name must contain only alpha characters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be between 3 and 20 characters long'),
    body('last_name')
      .isAlpha()
      .withMessage('First name must contain only alpha characters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be between 3 and 20 characters long'),
    (req, res, next) => {
      try {
        const { errors } = validationResult(req);
        if (!errors.length) return next();
        console.log(errors);
        const errorArray = errors.map((err) => err.msg);
        throw new Error(errorArray);
      } catch (error) {
        next(error);
      }
    },
    createUser
  );

userRouter
  .route('/:id')
  .get(getOneUser)
  .put(express.json(), updateUser)
  .delete(deleteUser);

export default userRouter;
