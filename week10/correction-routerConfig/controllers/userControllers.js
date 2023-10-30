import pool from '../db/client.js';
import ErrorStatus from '../utils/errorStatus.js';

const getAllUsers = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users;');
    return res.json(rows);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      rows: [oneUser],
    } = await pool.query('SELECT * FROM users WHERE id=$1', [id]);

    if (!oneUser)
      throw new ErrorStatus(`User with id ${id} does not exist`, 404);

    return res.json(oneUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    return res.json({});
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, createUser, getOneUser, updateUser, deleteUser };
