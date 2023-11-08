import ErrorStatus from '../utils/errorStatus.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

/* ----- Exercise 3 ----- */
const loginPage = async (req, res, next) => {
  try {
    const loginFile = process.cwd() + '/public/login.html';
    return res.sendFile(loginFile);
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 4 ----- */
const registerPage = async (req, res, next) => {
  try {
    const registerFile = process.cwd() + '/public/register.html';
    return res.sendFile(registerFile);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    /* ----- Exercise 4 ----- */
    // const { username, password } = req.body;

    // if (!username || !password)
    //   throw new ErrorStatus('Missing required fields', 400);

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const { _id } = await User.create({ username, password: hashedPassword });

    // const token = jwt.sign(
    //   { _id, grant_type: 'ADMIN' },
    //   process.env.JWT_SECRET_KEY,
    //   {
    //     expiresIn: '1h',
    //   }
    // );

    // res.set('authorization', token);
    // return res.redirect(308, 'connect');

    /* ----- Exercise 5 ----- */
    const { username, password } = req.body;

    if (!username || !password)
      throw new ErrorStatus('Missing required fields', 400);

    const hashedPassword = await bcrypt.hash(password, 10);

    const { _id } = await User.create({ username, password: hashedPassword });

    const token = jwt.sign(
      { _id, grant_type: 'ADMIN' },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.set('authorization', token);
    return res.redirect(308, 'connect');
  } catch (error) {
    next(error);
  }
};

const connectUser = async (req, res, next) => {
  try {
    /* ----- Exercise 3 ----- */
    // const { username, password } = req.body;

    // if (username !== 'john' && password !== 'doe') return res.redirect('login');

    // const token = jwt.sign({ grant_type: 'ADMIN' }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    // res.set('authorization', token);
    // const tokenCheckFile = process.cwd() + '/public/inputToken.html';
    // return res.sendFile(tokenCheckFile);

    /* ----- Exercise 4 ----- */
    const { username, password } = req.body;

    const { authorization } = req.headers;

    if ((!username || !password) && !authorization)
      return res.redirect('login');

    if (authorization) {
      const tokenCheckFile = process.cwd() + '/public/inputToken.html';
      return res.sendFile(tokenCheckFile);
    }

    const findUser = await User.findOne({ username });

    if (!findUser) return res.redirect('login');

    const generateToken = jwt.sign(
      { _id: findUser._id, grant_type: 'ADMIN' },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.set('authorization', generateToken);

    const tokenCheckFile = process.cwd() + '/public/inputToken.html';
    return res.sendFile(tokenCheckFile);
  } catch (error) {
    next(error);
  }
};

const adminPage = async (req, res, next) => {
  try {
    /* ----- Exercise 3 ----- */
    // const { token } = req.body;

    // const tokenContent = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // if (tokenContent.grant_type !== 'ADMIN') return res.redirect('login');

    // const adminPanel = process.cwd() + '/public/adminPanel.html';
    // return res.sendFile(adminPanel);

    /* ----- Exercise 4 ----- */
    // const { token } = req.body;

    // const tokenContent = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // if (tokenContent.grant_type !== 'ADMIN') return res.redirect('login');

    // const { username } = await User.findById(tokenContent._id);

    // return res.render('admin', { username });

    /* ----- Exercise 5 ----- */
    const { username } = await User.findById(req.userId);

    return res.render('admin', { username });
  } catch (error) {
    next(error);
  }
};

/* ----- Exercise 3 ----- */
const logoutUser = async (req, res, next) => {
  try {
    return res.redirect('login');
  } catch (error) {
    next(error);
  }
};

export {
  loginPage,
  registerPage,
  registerUser,
  connectUser,
  adminPage,
  logoutUser,
};
