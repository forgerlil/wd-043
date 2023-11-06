import express from 'express';
import sessionRouter from './routes/sessionRoute.js';
import jwtRouter from './routes/jwtRoute.js';
const app = express();

const port = process.env.PORT || 8000;

app.use('/session', sessionRouter);
app.use('/jwt', jwtRouter);

app.get('/', (req, res) =>
  res.send(
    `<h1>Sessions and JWT!</h1>
    <a href="/session">Sessions</a>
    <br>
    <br>
    <a href="/jwt">JWT</a>`
  )
);

app.listen(port, () => console.log(`Server up on port ${port}`));
