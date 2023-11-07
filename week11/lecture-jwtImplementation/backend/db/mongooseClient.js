import mongoose from 'mongoose';
import chalkLog from '../lib/chalkColors.js';

try {
  const client = await mongoose.connect(process.env.MONGO_URI);
  chalkLog('cyan', `Connected to MongoDB @ ${client.connection.host}`);

  client.connection.on('disconnect', () => {
    throw new Error(`Lost connection to MongoDB @ ${client.connection.host}`);
  });
} catch (error) {
  chalkLog('red', error);
  process.exit(0);
}
