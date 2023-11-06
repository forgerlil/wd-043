import express from 'express';
import {
  allDucks,
  oneDuck,
  createDuck,
  editDuck,
  deleteDuck,
  findDucksFromOwner,
} from '../controllers/duckControllers.js';

const duckRouter = express.Router();

duckRouter.route('/').get(allDucks).post(express.json(), createDuck);
duckRouter
  .route('/:id')
  .get(oneDuck)
  .put(express.json(), editDuck)
  .delete(deleteDuck);
duckRouter.get('/owner/:id', findDucksFromOwner);

export default duckRouter;
