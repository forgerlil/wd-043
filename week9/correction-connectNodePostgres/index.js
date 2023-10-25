const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Connect to SQL exercise!'));

app.listen(port, () => `Server up on port ${port}`);
