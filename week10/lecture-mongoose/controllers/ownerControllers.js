import ErrorStatus from '../utils/errorStatus.js';

const allOwners = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const oneOwner = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const createOwner = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const editOwner = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const deleteOwner = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

export { allOwners, oneOwner, createOwner, editOwner, deleteOwner };
