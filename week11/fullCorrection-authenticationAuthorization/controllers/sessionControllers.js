import bcrypt from 'bcrypt';
import chalkLog from '../lib/chalkColors.js';
import pool from '../db/pgClient.js';
import ErrorStatus from '../utils/errorStatus.js';

/* ----- Exercise 1 ----- */
const setUser = async (req, res, next) => {
  try {
    req.session.name = 'John Doe';
    return res.send('Your name was stored!');
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 1 ----- */
const serveUser = async (req, res, next) => {
  try {
    if (!req.session.name)
      return res.send(
        'You must register first! Go to /session/setName for that!'
      );
    return res.send(`Hello ${req.session.name}!`);
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 2 ----- */
const loginForm = async (req, res, next) => {
  try {
    const loginFile = process.cwd() + '/public/login.html';
    return res.sendFile(loginFile);
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 4 ----- */
const registerForm = async (req, res, next) => {
  try {
    const registerFile = process.cwd() + '/public/register.html';
    return res.sendFile(registerFile);
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 4 ----- */
const registerUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new ErrorStatus('Missing required fields', 400);

    const hashedPassword = await bcrypt.hash(password, 10);

    const {
      rows: [newUser],
    } = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;',
      [username, hashedPassword]
    );

    if (!newUser) throw new ErrorStatus('Cannot create user', 500);

    req.session.isConnected = true;
    return res.render('admin', { username: newUser.username });
  } catch (error) {
    next(error);
  }
};

const connectUser = async (req, res, next) => {
  try {
    /* ----- Exercise 2 ----- */
    // const { username, password } = req.body;
    // if (username !== 'john' && password !== 'doe') return res.redirect('login');

    // req.session.isConnected = true;
    // return res.redirect('admin');

    /* ----- Exercise 4 ----- */
    const { username, password } = req.body;
    if (!username || !password) return res.redirect('login');

    const {
      rows: [user],
    } = await pool.query('SELECT * FROM users WHERE username=$1', [username]);

    const comparePwd = await bcrypt.compare(password, user?.password ?? '');
    if (!user || !comparePwd) throw new ErrorStatus('Invalid credentials', 401);

    req.session.isConnected = true;
    return res.render('admin', { username: user.username });
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 2 ----- */
const adminPage = async (req, res, next) => {
  try {
    if (!req.session.isConnected) return res.redirect('login');

    const adminPanel = process.cwd() + '/public/adminPanel.html';
    return res.sendFile(adminPanel);
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 2 ----- */
const logoutUser = async (req, res, next) => {
  try {
    req.session.destroy((err) => err && res.send('Cannot log out!'));
    chalkLog('bgGreen', 'Logging out...');
    return res.redirect('login');
  } catch (error) {
    next(error);
  }
};

export {
  setUser,
  serveUser,
  loginForm,
  registerForm,
  registerUser,
  connectUser,
  adminPage,
  logoutUser,
};
