import mongoose from 'mongoose';
import chalkLog from '../lib/chalkColors.js';

try {
  const client = await mongoose.connect(process.env.MONGO_URI);
  chalkLog('cyan', `Connected to MongoDB @ ${client.connection.host}`);

  client.connection.on('disconnect', (error) => {
    chalkLog('red', `MongoDB disconnected due to ${error}`);
  });
} catch (error) {
  chalkLog('red', error.message);
  chalkLog('red', error.stack);
}
