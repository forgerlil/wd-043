const express = require('express');
const gamesRouter = express.Router();
const { randomGame, getAllGames } = require('../controllers/gamesControllers');
const tonightsGame = require('../middlewares/tonightsGame');

gamesRouter.get('/', getAllGames);

gamesRouter.get('/pickGame', tonightsGame, randomGame);

module.exports = gamesRouter;
