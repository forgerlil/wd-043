const express = require('express');
const app = express();
const secure = require('./middlewares/secure');

const port = process.env.PORT || 8000;

app.use(secure);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));
