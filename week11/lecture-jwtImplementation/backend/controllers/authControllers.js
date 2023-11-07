import ErrorStatus from '../utils/errorStatus.js';
import chalkLog from '../lib/chalkColors.js';
import OwnerModel from '../models/ownerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const oneOwner = async (req, res, next) => {
  try {
    const findOwner = await OwnerModel.findById(req.userId);

    return res.json(findOwner);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new ErrorStatus('Please provide all required field', 400);

    const findUser = await OwnerModel.findOne({ email }).select('+password');
    if (!findUser) throw new ErrorStatus('User does not exist', 404);

    const pwdMatch = await bcrypt.compare(password, findUser.password);
    if (!pwdMatch) throw new ErrorStatus('Password mismatch', 400);

    const token = jwt.sign({ _id: findUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.set('authorization', token);
    return res.end();
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      throw new ErrorStatus('Please provide all required field', 400);

    const hashedPwd = await bcrypt.hash(password, 10);

    const { _id } = await OwnerModel.create({
      firstName,
      lastName,
      email,
      password: hashedPwd,
    });

    const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set the token in the headers of the response
    res.set('authorization', token);
    return res.sendStatus(201);

    // Or send the token in the body of the response
    // return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

export { oneOwner, loginUser, registerUser };
