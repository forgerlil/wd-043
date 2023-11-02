import ErrorStatus from '../utils/errorStatus.js';
import DuckModel from '../models/duckModel.js';

const allDucks = async (req, res, next) => {
  try {
    const dbDucks = await DuckModel.find().populate('owner');
    return res.json(dbDucks);
  } catch (error) {
    next(error);
  }
};

const oneDuck = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Invalid Id', 400);

    const findDuck = await DuckModel.findById(id).populate('owner');

    return res.json(findDuck);
  } catch (error) {
    next(error);
  }
};

const findDucksFromOwner = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Invalid Id', 400);

    const findDuck = await DuckModel.find({ owner: id }).populate('owner');

    return res.json(findDuck);
  } catch (error) {
    next(error);
  }
};

const createDuck = async (req, res, next) => {
  try {
    const { duckName, imgSrc, quote, owner } = req.body;
    if (!duckName || !imgSrc || !owner)
      throw new ErrorStatus('Please provide all required field', 400);

    const newDuck = await DuckModel.create({
      duckName,
      imgSrc,
      quote: quote || undefined,
      owner,
    });

    return res.json(await newDuck.populate('owner'));
  } catch (error) {
    next(error);
  }
};

const editDuck = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Invalid Id', 400);

    const { duckName, imgSrc, quote, owner } = req.body;
    if (!duckName && !imgSrc && !quote && !owner)
      throw new ErrorStatus('Please provide at least one field', 400);

    const updatedDuck = await DuckModel.findByIdAndUpdate(
      id,
      {
        duckName,
        imgSrc,
        quote,
        owner,
      },
      { new: true, runValidators: true }
    ).populate('owner');

    if (!updatedDuck)
      throw new ErrorStatus(`Duck with id of ${id} could not be found`, 404);

    return res.json(updatedDuck);
  } catch (error) {
    next(error);
  }
};

const deleteDuck = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Invalid Id', 400);

    const byeDuck = await DuckModel.findByIdAndDelete(id);
    return res.json(byeDuck);
  } catch (error) {
    next(error);
  }
};

export {
  allDucks,
  oneDuck,
  createDuck,
  editDuck,
  deleteDuck,
  findDucksFromOwner,
};
