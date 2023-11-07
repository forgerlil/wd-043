import ErrorStatus from '../utils/errorStatus.js';
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new ErrorStatus('Unauthorized', 401);

    const payload = jwt.verify(authorization, process.env.JWT_SECRET);

    req.userId = payload._id;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
