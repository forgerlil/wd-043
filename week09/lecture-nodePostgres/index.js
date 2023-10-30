// You can require the dotenv package in your first line (for safety)
// require('dotenv').config();
const express = require('express');
const app = express();
const dbPool = require('./db/pgClient');
const {
  getAllDucks,
  getSingleDuck,
  createDuck,
  editDuck,
  deleteDuck,
} = require('./controllers/duckControllers');

const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Node + Postgres API!'));

app.get('/timestamp', async (req, res) => {
  const {
    rows: [timestamp],
  } = await dbPool.query('SELECT NOW();');
  res.send(timestamp);
});

app.route('/ducks').get(getAllDucks).post(createDuck);
app.route('/ducks/:id').get(getSingleDuck).put(editDuck).delete(deleteDuck);

app.listen(port, () => console.log(`Server up on port ${port}`));
