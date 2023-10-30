import express from 'express';
import userRouter from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Router config workshop!'));

app.use('/users', userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
