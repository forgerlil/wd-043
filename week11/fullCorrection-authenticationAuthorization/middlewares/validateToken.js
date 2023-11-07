import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  try {
    const { token } = req.body;

    const tokenContent = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (tokenContent.grant_type !== 'ADMIN') return res.redirect('login');

    req.userId = tokenContent._id;
    next();
  } catch (error) {
    next(error);
  }
};

export default validateToken;
