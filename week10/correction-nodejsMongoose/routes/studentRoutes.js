import express from 'express';
import {
  allStudents,
  createStudent,
  editStudents,
} from '../controllers/studentControllers.js';

const studentRouter = express.Router();

studentRouter
  .route('/')
  .get(allStudents)
  .post(express.json(), createStudent)
  .put(express.json(), editStudents);

export default studentRouter;
