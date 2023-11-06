import mongoose from 'mongoose';
import chalkLog from '../lib/chalkColors.js';

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(({ connection }) =>
//     console.log(`Connected to MongoDB @ ${connection.host}`)
//   )
//   .catch((err) => console.log(err));

try {
  const client = await mongoose.connect(process.env.MONGO_URI);
  chalkLog('magenta', `Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  chalkLog('red', error);
}
