import express from 'express';
import cors from 'cors';
import './db/mongooseClient.js';
import authRouter from './routes/authRoutes.js';
import duckRouter from './routes/duckRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => res.send('Welcome to the Duck Pond API!'));

app.use('/auth', authRouter);
app.use('/ducks', duckRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
