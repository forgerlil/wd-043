import chalkLog from '../lib/chalkColors.js';

const errorHandler = (err, req, res, next) => {
  chalkLog('red', err);
  return res.status(err.statusCode || 500).json({ error: err.message });
};

export default errorHandler;
