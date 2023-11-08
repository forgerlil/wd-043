import express from 'express';
import sessionRouter from './routes/sessionRoutes.js';
import jwtRouter from './routes/jwtRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import './db/mongooseClient.js';

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.send('Authentication with Sessions and JWT'));

app.use('/session', sessionRouter);
app.use('/jwt', jwtRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
