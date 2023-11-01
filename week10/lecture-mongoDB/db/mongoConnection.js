import { MongoClient } from 'mongodb';
import chalkLog from '../lib/chalkColors.js';

const client = new MongoClient(process.env.MONGO_URI);

let conPool;

try {
  conPool = await client.connect();
  chalkLog('cyan', 'Connected to MongoDB');
} catch (error) {
  chalkLog('red', error);
}

export default conPool;
