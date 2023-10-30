import { body, validationResult } from 'express-validator';

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const errorList = errors.array().map((err) => err.msg);
  return res.status(500).json({ error: errorList });
};

const validateUser = [
  body('firstname')
    .isAlpha()
    .withMessage('First name must contain only letters.')
    .isLength({ min: 3, max: 25 })
    .withMessage('First name must be between 3 and 25 characters long.')
    .notEmpty()
    .withMessage('No first name sent.'),
  body('lastname')
    .isAlpha()
    .withMessage('Last name must contain only letters.')
    .isLength({ min: 3, max: 25 })
    .withMessage('Last name must be between 3 and 25 characters long.')
    .notEmpty()
    .withMessage('No last name sent.'),
  checkErrors,
];

export default validateUser;
