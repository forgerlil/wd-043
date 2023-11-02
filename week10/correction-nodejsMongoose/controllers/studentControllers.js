import ErrorStatus from '../utils/errorStatus.js';
import chalkLog from '../lib/chalkColors.js';

const allStudents = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const editStudents = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

export { allStudents, createStudent, editStudents };
