import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
import userRouter from './routes/userRouter.js';
import errorHandler from './middlewares/errorHandler.js';

app.use(express.json());

app.get('/', (req, res) => res.send('Router config workshop!'));

app.use('/users', userRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
