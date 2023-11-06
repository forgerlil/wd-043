import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  last_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  first_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default model('Student', studentSchema);
