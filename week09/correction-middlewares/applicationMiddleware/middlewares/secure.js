const secure = (req, res, next) => {
  const { token } = req.query;
  if (!token) return res.sendStatus(403);
  next();
};

module.exports = secure;
