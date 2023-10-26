const catalogue = require('../data.json');

const getAllGames = (req, res) => {
  return res.send(catalogue);
};

const randomGame = (req, res) => {
  console.log('Hello from the games path!');
  return res.send(req.randomGame);
};

module.exports = { randomGame, getAllGames };
