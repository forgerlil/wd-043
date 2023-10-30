const pool = require('../DB/sqlConnection');

/**
 * Controller to serve all users from the database
 * @route GET /users
 */
const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users;');
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to serve a single user from the database based on id from the params
 * @route GET /users/:id
 */
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query('SELECT * FROM users WHERE id=$1;', [id]);
    if (!rows.length) throw new Error('User not found');

    return res.json(rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message });
  }
};

/**
 * Controller to serve all orders a single user has placed. User `id` is required from the params.
 * @route GET /users/:id/orders
 */
const getOrdersFromUser = async (req, res) => {
  try {
    const { id } = req.params;

    // We join users with the orders table, with a few functions to format the data.
    const {
      rows: [userWithOrders],
    } = await pool.query(
      'SELECT users.*, array_agg(to_json(orders.*)) as orders FROM users LEFT JOIN orders ON users.id=orders.user_id WHERE users.id=$1 GROUP BY users.id;',
      [id]
    );

    // If the query doesn't retrieve results, we output an error as the user with that id doesn't exist.
    if (!userWithOrders)
      return res.status(404).json({ error: 'User could not be found' });

    // If user exists but has no orders, we dish out an error as well.
    if (!userWithOrders.orders[0])
      return res.status(404).json({ error: 'User has not placed any orders' });

    return res.json(userWithOrders);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: error.message });
  }
};

/**
 * Controller to create a user in the database. `first_name`, `last_name` and `age` are required from the body.
 * @route POST /users/
 */
const createUser = async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age) throw new Error('Missing data');

    const {
      rows: [user],
    } = await pool.query(
      'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *',
      [first_name, last_name, age]
    );

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to update one user in the database. User `id` is required from the params.
 * `first_name`, `last_name` and `age` are required from the body.
 * @route PUT /users/:id
 */
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age) throw new Error('Missing data');

    const {
      rows: [user],
    } = await pool.query(
      'UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4 RETURNING *',
      [first_name, last_name, age, id]
    );

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to deactivate a user if they have not placed an order. User `id` is required from the params.
 * @route DELETE /users/:id/check-inactive
 */
const deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query(
      'SELECT * FROM orders WHERE user_id=$1;',
      [id]
    );

    if (rows.length)
      throw new Error('User has placed orders and cannot be set to inactive');

    const {
      rows: [user],
    } = await pool.query(
      'UPDATE users SET active=false WHERE id=$1 RETURNING *;',
      [id]
    );

    if (!user) throw new Error('User not found');

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to delete an user from the database permanently. User `id` is required from the params.
 * @route DELETE /users/:id
 */
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query('DELETE FROM users WHERE id=$1', [id]);

    return res.json({ success: 'User deleted' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  getOrdersFromUser,
  createUser,
  updateUser,
  deactivateUser,
  deleteUser,
};
