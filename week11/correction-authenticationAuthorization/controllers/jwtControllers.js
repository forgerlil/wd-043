import ErrorStatus from '../utils/errorStatus.js';
import jwt from 'jsonwebtoken';

const loginPage = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const connectUser = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const adminPage = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

export { loginPage, connectUser, adminPage };
