import express from 'express';
import jwt from 'jsonwebtoken';
const jwtRoute = express.Router();

const users = [
  { id: 1, name: 'Sully', password: 'abcd' },
  { id: 2, name: 'Harun', password: '1234' },
  { id: 3, name: 'Mochi', password: 'zxcv' },
];

jwtRoute.use(express.json());

// Dish out a token
jwtRoute.post('/login', (req, res) => {
  const user = users.find(
    (user) =>
      (user.name.toLowerCase() === req.body.name?.toLowerCase() ||
        user.name.toLowerCase() === req.body.email?.toLowerCase()) &&
      user.password === req.body.password
  );

  // Getting user from database and comparing passwords example
  // const hashedPwd = bcrypt.hash(req.body.password);

  // UserModel.findOne({
  //   $and: [
  //     { $or: [{ email: req.body.name }, { username: req.body.name }] },
  //     { password: hashedPwd },
  //   ],
  // });

  // 'SELECT * FROM users WHERE email=$1 OR username=$1 AND password=$2',
  //   [req.body.name, hashedPwd];

  if (!user)
    return res.status(404).send('Invalid username and password combination.');

  const token = jwt.sign(`${user.id}`, process.env.JWT_SECRET);
  return res.send(token);
});

// Verify tokens to allow access

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).send('Unauthorized');

    const payload = jwt.verify(authorization, process.env.JWT_SECRET);

    req.userId = payload;
    next();
  } catch (error) {
    return res.status(500).send(error);
  }
};

jwtRoute.get('/auth', verifyToken, (req, res) => {
  const user = users.find((user) => user.id == req.userId);

  return res.send(`Hello ${user.name}, welcome to your dashboard!`);
});

export default jwtRoute;
