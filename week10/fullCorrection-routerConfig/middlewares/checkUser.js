import pool from '../DB/dbConnection.js';
import ErrorStatus from '../utils/ErrorStatus.js';

const checkUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { rows } = await pool.query('SELECT * FROM users WHERE id=$1;', [id]);
    if (!rows.length) throw new ErrorStatus('User not found', 404);

    req.user = rows[0];
    next();
  } catch (error) {
    next(error);
  }
};

export default checkUser;
