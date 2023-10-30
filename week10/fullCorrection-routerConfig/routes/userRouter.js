import express from 'express';
const userRouter = express.Router();
import {
  allUsers,
  newUser,
  singleUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js';
import checkUser from '../middlewares/checkUser.js';
import validateUser from '../middlewares/bodyValidation.js';

userRouter.route('/').get(allUsers).post(validateUser, newUser);
userRouter
  .route('/:id')
  .all(checkUser)
  .get(singleUser)
  .put(validateUser, updateUser)
  .delete(deleteUser);

export default userRouter;
