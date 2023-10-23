const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Welcome to the Node + Postgres API!'));

app.listen(port, () => console.log(`Server up on port ${port}`));
