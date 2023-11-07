import jwt from 'jsonwebtoken';

const loginPage = async (req, res, next) => {
  try {
    return res.sendFile('public/login.html', { root: process.cwd() });
  } catch (error) {
    next(error);
  }
};

const connectUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (username.toLowerCase() !== 'john' && password.toLowerCase() !== 'doe')
      return res.redirect('login');

    const token = jwt.sign({ grant_type: 'ADMIN' }, process.env.JWT_SECRET_KEY);

    res.set('Authorization', token);
    return res.sendFile('public/inputToken.html', { root: process.cwd() });
  } catch (error) {
    next(error);
  }
};

const adminPage = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) return res.redirect('login');

    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (payload.grant_type !== 'ADMIN') return res.redirect('login');

    return res.sendFile('public/admin.html', { root: process.cwd() });
  } catch (error) {
    return res.redirect('login');
  }
};

export { loginPage, connectUser, adminPage };
