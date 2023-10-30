import ErrorStatus from '../utils/errorStatus.js';

const allDucks = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const oneDuck = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const createDuck = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const editDuck = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const deleteDuck = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

export { allDucks, oneDuck, createDuck, editDuck, deleteDuck };
