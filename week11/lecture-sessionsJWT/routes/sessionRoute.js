import express from 'express';
import session from 'express-session';
const sessionRouter = express.Router();

sessionRouter.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

const isAuthenticated = (req, res, next) => {
  if (req.session.user) return next();
  next('route');
};

sessionRouter.get('/', isAuthenticated, (req, res) => {
  return res.send(
    `Hello, ${req.session.user.username}! <a href='session/logout'>Logout</a>`
  );
});

sessionRouter.get('/', (req, res) => {
  const loginFile = process.cwd() + '/public/sessionLogin.html';
  return res.sendFile(loginFile);
});

sessionRouter.post(
  '/login',
  express.urlencoded({ extended: true }),
  (req, res) => {
    req.session.user = req.body;
    return res.redirect('/session');
  }
);

sessionRouter.get('/logout', (req, res) => {
  // We keep the session but remove the contents
  // delete req.session.user;

  // Or we destroy the session altogether
  req.session.destroy((err) => err && res.send('Cannot log out'));
  return res.redirect('/session');
});

export default sessionRouter;

// s%3AKlokk3VnVewk-rxwooZ_W7IaC_W0mcid.vyti3T2r536ZJMca6CIgobMbktPfCDc21VEd9GQjbJk

// s%3Af9pv9fVmK8pG31GjBHT5SrhAiZewYh1_.nrzDdyXUaqPXWLKMnGr9mRWZLr4fiqdq6eJGQKAOdmA
