import ErrorStatus from '../utils/errorStatus.js';
import conPool from '../db/mongoConnection.js';
import { ObjectId } from 'mongodb';

const ownersCollection = conPool.db('duckPond').collection('owners');

const allOwners = async (req, res, next) => {
  try {
    const owners = await ownersCollection.find().toArray();
    return res.json(owners);
  } catch (error) {
    next(error);
  }
};

const oneOwner = async (req, res, next) => {
  try {
    const { id } = req.params;

    const oneOwner = await ownersCollection.findOne({ _id: new ObjectId(id) });
    return res.json(oneOwner);
  } catch (error) {
    next(error);
  }
};

const createOwner = async (req, res, next) => {
  try {
    const { firstName, lastName, email, age } = req.body;

    if (!firstName || !lastName || !email || !age)
      throw new ErrorStatus('Missing fields', 400);

    const createOwner = await ownersCollection.insertOne({
      firstName,
      lastName,
      email,
      age,
    });

    const findNewOwner = await ownersCollection.findOne({
      _id: createOwner.insertedId,
    });

    return res.json(findNewOwner);
  } catch (error) {
    next(error);
  }
};

export { allOwners, oneOwner, createOwner };
