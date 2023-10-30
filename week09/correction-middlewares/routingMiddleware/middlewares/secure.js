const secure = (req, res, next) => {
  const { token } = req.params;
  if (token.length <= 3)
    return res.status(401).send('Token must be at least 4 characters long.');
  next();
};

module.exports = secure;
