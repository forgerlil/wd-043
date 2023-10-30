import express from 'express';
import {
  allDucks,
  oneDuck,
  createDuck,
  editDuck,
  deleteDuck,
} from '../controllers/duckControllers.js';

const duckRouter = express.Router();

duckRouter.route('/').get(allDucks).post(express.json(), createDuck);
duckRouter
  .route('/:id')
  .get(oneDuck)
  .put(express.json(), editDuck)
  .delete(deleteDuck);

export default duckRouter;
