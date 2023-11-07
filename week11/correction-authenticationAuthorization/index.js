import express from 'express';
import jwtRouter from './routes/jwtRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Authentication with Sessions and JWT'));

app.use('/jwt', jwtRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
