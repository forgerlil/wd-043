const pool = require('../db/sqlClient');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users;');
    return res.json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getOneUser = (req, res) => {
  const { id } = req.params;

  pool
    .query(`SELECT * FROM users WHERE id=$1`, [id])
    .then((singleUser) => res.json(singleUser.rows[0]))
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
};

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;

    if (!first_name || !last_name || !age) throw new Error('Missing fields');

    const {
      rows: [newUser],
    } = await pool.query(
      'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *;',
      [first_name, last_name, age]
    );

    return res.json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    return res.json({});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
