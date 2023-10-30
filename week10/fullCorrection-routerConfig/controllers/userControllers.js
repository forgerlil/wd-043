import pool from '../DB/dbConnection.js';
import ErrorStatus from '../utils/ErrorStatus.js';

/**
 * Controller to serve all users
 * @route GET `/users`
 */
const allUsers = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users;');
    return res.json(rows);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to serve one user. User `id` is required in the params
 * @route GET `/users/:id`
 */
const singleUser = async (req, res, next) => {
  try {
    return res.json(req.user);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user. `id`, `firstname` and `lastname` are required in the body
 * @route POST `/users`
 */
const newUser = async (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    if (!firstname || !lastname) throw new ErrorStatus('Missing fields', 400);

    const {
      rows: [newUser],
    } = await pool.query(
      'INSERT INTO users (firstname, lastname) VALUES ($1, $2) RETURNING *;',
      [firstname, lastname]
    );

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user. `id`, `firstname` and `lastname` are required in the body
 * @route PUT `/users/:id`
 */
const updateUser = async (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    if (!firstname && !lastname)
      throw new ErrorStatus('Please submit at least one field', 400);

    const {
      rows: [user],
    } = await pool.query(
      `UPDATE users SET firstname=$1, lastname=$2 WHERE id=${req.user.id} RETURNING *;`,
      [firstname, lastname]
    );

    return res.json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user. `id`, `firstname` and `lastname` are required in the body
 * @route DELETE `/users/:id`
 */
const deleteUser = async (req, res, next) => {
  try {
    await pool.query(`DELETE FROM users WHERE id=${req.user.id} RETURNING *;`);

    return res.json({ success: 'User deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export { allUsers, newUser, singleUser, updateUser, deleteUser };
