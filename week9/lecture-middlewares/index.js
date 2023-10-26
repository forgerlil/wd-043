const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const catalogue = require('../data.json');

app.get('/', (req, res) => {
  console.log('Hello World!');
  return res.send('All good');
});

app.listen(port, () => console.log(`Server up on port ${port}`));
