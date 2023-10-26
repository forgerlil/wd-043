const express = require('express');
const app = express();
const secure = require('./middlewares/secure');
const pool = require('./db/sqlClient');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Middlewares time!'));

app.get('/verify/:token', secure, async (req, res) => {
  try {
    const { token } = req.params;

    const { rows } = await pool.query(
      'SELECT * FROM users JOIN token ON users.token_id=token.id WHERE value=$1',
      [token]
    );

    if (!rows.length) throw new Error('Invalid token');

    return res.json({ success: 'Valid token', users: rows });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: error.message });
  }
});

app.post('/users', express.json(), async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error('Missing field: name');

    const {
      rows: [newUser],
    } = await pool.query(
      'INSERT INTO users (name, token_id) VALUES ($1, NULL) RETURNING *;',
      [name]
    );

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

app.patch('/users/:id/token', express.json(), async (req, res) => {
  try {
    const { id } = req.params;
    const { token } = req.body;

    if (!+id) throw new Error('Id must be a number');
    if (!token || !+token) throw new Error('Invalid token');

    const {
      rows: [updatedUser],
    } = await pool.query(
      'UPDATE users SET token_id=$1 WHERE id=$2 RETURNING *;',
      [token, id]
    );

    return res.json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
