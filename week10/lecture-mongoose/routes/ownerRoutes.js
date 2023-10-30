import express from 'express';
import {
  allOwners,
  oneOwner,
  createOwner,
} from '../controllers/ownerControllers.js';

const ownerRouter = express.Router();

ownerRouter.route('/').get(allOwners).post(express.json(), createOwner);
ownerRouter.route('/:id').get(oneOwner);

export default ownerRouter;
