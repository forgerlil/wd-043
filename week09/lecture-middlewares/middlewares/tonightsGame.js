const catalogue = require('../data.json');
const ErrorStatus = require('../utils/errorStatus');

const tonightsGame = (req, res, next) => {
  try {
    const busyHours = Math.round(Math.random() * 24) < 18;
    if (busyHours)
      throw new ErrorStatus('Now is not the time for games :(', 403);

    req.randomGame = catalogue[Math.floor(Math.random() * catalogue.length)];
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tonightsGame;
