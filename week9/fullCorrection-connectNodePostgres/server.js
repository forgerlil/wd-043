require('dotenv').config();
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const {
  getAllUsers,
  getOneUser,
  getOrdersFromUser,
  createUser,
  updateUser,
  deactivateUser,
  deleteUser,
} = require('./controllers/userControllers');

const {
  getAllOrders,
  getOrder,
  placeOrder,
  updateOrder,
  removeOrder,
} = require('./controllers/orderControllers');

const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('Connect to SQL exercise!'));

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const errorList = errors.array().map((err) => err.msg);
  return res.status(500).json({ error: errorList });
};

app
  .route('/users')
  .get(getAllUsers)
  .post(
    body('first_name')
      .isAlpha()
      .withMessage('Name must contain only letters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be between 3 and 20 characters long.'),
    body('last_name')
      .isAlpha()
      .withMessage('Name must contain only letters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('Last name must be between 3 and 20 characters long.'),
    body('age')
      .isNumeric()
      .withMessage('Age must be a number.')
      .isInt({ min: 18, max: 100 })
      .withMessage('Age must be between 18 and 100'),
    checkErrors,
    createUser
  );
app
  .route('/users/:id')
  .get(getOneUser)
  .put(
    body('first_name')
      .isAlpha()
      .withMessage('Name must contain only letters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('First name must be between 3 and 20 characters long.'),
    body('last_name')
      .isAlpha()
      .withMessage('Name must contain only letters.')
      .isLength({ min: 3, max: 20 })
      .withMessage('Last name must be between 3 and 20 characters long.'),
    body('age')
      .isNumeric()
      .withMessage('Age must be a number.')
      .isInt({ min: 18, max: 100 })
      .withMessage('Age must be between 18 and 100'),
    checkErrors,
    updateUser
  )
  .delete(deleteUser);
app.route('/users/:id/orders').get(getOrdersFromUser);
app.route('/users/:id/check-inactive').put(deactivateUser);

app
  .route('/orders')
  .get(getAllOrders)
  .post(
    body('price').isNumeric().withMessage('Price must be a number.'),
    body('user_id').isNumeric().withMessage('User id must be a number.'),
    checkErrors,
    placeOrder
  );
app
  .route('/orders/:id')
  .get(getOrder)
  .put(
    body('price').isNumeric().withMessage('Price must be a number.'),
    body('user_id').isNumeric().withMessage('User id must be a number.'),
    checkErrors,
    updateOrder
  )
  .delete(removeOrder);

app.listen(port, () => console.log(`Server up on port ${port}`));
