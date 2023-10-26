const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Middlewares time!'));

app.listen(port, () => console.log(`Server running on port ${port}`));
