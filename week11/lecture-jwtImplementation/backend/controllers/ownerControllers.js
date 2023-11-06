import ErrorStatus from '../utils/errorStatus.js';
import chalkLog from '../lib/chalkColors.js';
import OwnerModel from '../models/ownerModel.js';

const oneOwner = async (req, res, next) => {
  try {
    const { id } = req.params;

    const findOwner = await OwnerModel.findById(id);

    return res.json(findOwner);
  } catch (error) {
    next(error);
  }
};

const createOwner = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      throw new ErrorStatus('Please provide all required field', 400);

    const newOwner = await OwnerModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json(newOwner);
  } catch (error) {
    next(error);
  }
};

export { oneOwner, createOwner };
