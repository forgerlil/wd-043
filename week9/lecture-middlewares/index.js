const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const gamesRouter = require('./routes/gameRoutes');

app.use((req, res, next) => {
  console.log('Middleware was executed!');
  req.dataFromMiddleware = 'Middleware added this value onto the request';
  next();
});

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  console.log('Hello World!');
  return res.send('Middleware forwarded this value: ' + req.dataFromMiddleware);
});

app.use('/games', gamesRouter);

app.use((err, req, res, next) => {
  console.log(err);
  console.log('The error handling middleware is dealing with the error!');
  return res.status(err.statusCode || 500).json({ error: err.message });
});

app.listen(port, () => console.log(`Server up on port ${port}`));
