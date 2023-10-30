import express from 'express';
import ownerRouter from './routes/ownerRoutes.js';
import duckRouter from './routes/duckRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send("It's time for MongoDB with Mongoose!"));

app.use('/owners', ownerRouter);
app.use('/ducks', duckRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
