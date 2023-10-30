import chalk from 'chalk';

const errorHandler = (err, req, res, next) => {
  console.log(chalk.red(err));
  return res.status(err.statusCode || 500).json({ error: err.message });
};

export default errorHandler;
