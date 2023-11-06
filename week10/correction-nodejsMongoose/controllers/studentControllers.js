import ErrorStatus from '../utils/errorStatus.js';
import chalkLog from '../lib/chalkColors.js';
import StudentModel from '../models/userModel.js';

const allStudents = async (req, res, next) => {
  try {
    const getStudents = await StudentModel.find();
    return res.json(getStudents);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email)
      throw new ErrorStatus('Missing required fields', 400);

    // const createStudent = new StudentModel({ last_name, first_name, email });
    // const newStudent = await createStudent.save();

    const newStudent = await StudentModel.create({
      last_name,
      first_name,
      email,
    });

    return res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

const editStudents = async (req, res, next) => {
  try {
    // const updateUser = await StudentModel.findOneAndUpdate(
    //   { first_name: 'John' },
    //   { $set: { first_name: 'Bob' } },
    //   { runValidators: true, new: true }
    // );

    // return res.json(updateUser);

    const { last_name, first_name, email } = req.body;
    if (!email || !last_name || !first_name)
      throw new ErrorStatus('Please send all required fields', 400);

    const updateUser = await StudentModel.findOneAndUpdate(
      { email },
      { last_name, first_name },
      { runValidators: true, new: true }
    );

    return res.json(updateUser);
  } catch (error) {
    next(error);
  }
};

export { allStudents, createStudent, editStudents };
