// require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./controllers/userControllers');

// app.use(express.json());

app.get('/', (req, res) => res.send('Connect to SQL exercise!'));

app.route('/users').get(getAllUsers).post(express.json(), createUser);
app.route('/users/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

app.listen(port, () => console.log(`Server up on port ${port}`));
