const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then(({ connection }) =>
    console.log(`Connected to MongoDB @ ${connection.host}`)
  )
  .catch((err) => console.log(err));
