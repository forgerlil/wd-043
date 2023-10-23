const { body, validationResult } = require('express-validator');

// If any of the validation set by express-validator fails, it will populate req object
// We can check for the presence of errors in the req object with the validationResult function from express-validator
const checkErrors = (req, res, next) => {
  req.body.visited === 'true'
    ? (req.body.visited = true)
    : (req.body.visited = false);
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const errorList = errors.array().map((err) => err.msg);
  return res.status(500).json({ error: errorList });
};

// This array uses functions from express-validator to verify and constrain
// the content of the incoming data from the client
const countryValidator = [
  body('name').isAlpha().withMessage('Name must contain only letters.'),
  body('alpha2Code')
    .isAlpha()
    .withMessage('Alpha 2 must contain only letters.')
    .isLength({ min: 2, max: 2 })
    .withMessage('Alpha 2 code must be 2 characters long.')
    .notEmpty()
    .withMessage('No Alpha 2 code sent.'),
  body('alpha3Code')
    .isAlpha()
    .withMessage('Alpha 3 must contain only letters.')
    .isLength({ min: 3, max: 3 })
    .withMessage('Alpha 3 code must be 3 characters long.')
    .notEmpty()
    .withMessage('No Alpha 3 code sent.'),
  body('visited')
    .isAlpha()
    .withMessage('Visited must contain only letters.')
    .isIn(['true', 'false'])
    .withMessage('Invalid option for visiting sent.'),
  checkErrors,
];

module.exports = countryValidator;
