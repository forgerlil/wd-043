import express from 'express';
import studentRouter from './routes/studentRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import './db/cjsClient.cjs';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('NodeJS and Mongoose!'));

app.use('/students', studentRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
