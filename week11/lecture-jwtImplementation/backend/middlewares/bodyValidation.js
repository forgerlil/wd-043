const bodyValidation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  error ? next(error) : next();
};

export default bodyValidation;
