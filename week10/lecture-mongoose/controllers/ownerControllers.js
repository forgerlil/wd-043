import ErrorStatus from '../utils/errorStatus.js';
import chalkLog from '../lib/chalkColors.js';
import OwnerModel from '../models/ownerModel.js';

const allOwners = async (req, res, next) => {
  try {
    const dbOwners = await OwnerModel.find();
    return res.json(dbOwners);
  } catch (error) {
    next(error);
  }
};

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

    // instantiating the model to create a new document
    // const newOwner = new OwnerModel({ firstName, lastName, email, password });
    // chalkLog('magenta', newOwner);

    // const newDoc = await newOwner.save();
    // chalkLog('blue', newDoc);

    // Using the model's static .create() method to create and insert a new document in one go
    const newOwner = await OwnerModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.json(newOwner);
  } catch (error) {
    next(error);
  }
};

export { allOwners, oneOwner, createOwner };
