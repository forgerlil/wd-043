const randomNumGenerator = (limit = 1) => {
  return Math.round(Math.random() * limit);
};

module.exports = { randomNumGenerator };
