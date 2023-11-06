import { Schema, model, ObjectId } from 'mongoose';

const duckSchema = new Schema({
  duckName: {
    type: String,
    unique: true,
    minlength: 4,
    maxlength: 20,
    match: [
      /^[a-zA-Z\s.-]+$/,
      'must contain only letters and be between 4 and 20 characters long',
    ],
  },
  imgSrc: {
    type: String,
    required: true,
    match: [
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      'must be a valid URL',
    ],
  },
  quote: {
    type: String,
    default: 'Whenever you are ready!',
    maxlength: 75,
  },
  owner: {
    type: ObjectId,
    ref: 'Owner',
    required: true,
  },
});

export default model('Duck', duckSchema);
