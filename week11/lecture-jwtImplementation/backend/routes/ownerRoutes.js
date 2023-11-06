import express from 'express';
import { oneOwner, createOwner } from '../controllers/ownerControllers.js';

const ownerRouter = express.Router();

ownerRouter.route('/').post(express.json(), createOwner);
ownerRouter.route('/:id').get(oneOwner);

export default ownerRouter;
