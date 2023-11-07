import express from 'express';
import {
  allDucks,
  oneDuck,
  createDuck,
  editDuck,
  deleteDuck,
  findDucksFromOwner,
} from '../controllers/duckControllers.js';
import verifyToken from '../middlewares/verifyToken.js';

const duckRouter = express.Router();

duckRouter
  .route('/')
  .get(allDucks)
  .post(express.json(), verifyToken, createDuck);
duckRouter
  .route('/:id')
  .get(oneDuck)
  .put(express.json(), verifyToken, editDuck)
  .delete(verifyToken, deleteDuck);
duckRouter.get('/owner/:id', findDucksFromOwner);

export default duckRouter;
