const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Time for the Multer Workshop!'));

app.listen(port, () => console.log(`Server up on port ${port}`));
