const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).send(`<h2>Error: ${err}</h2>`);
};

module.exports = errorHandler;
