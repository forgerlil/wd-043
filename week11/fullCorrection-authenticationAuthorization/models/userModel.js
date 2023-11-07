import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 20,
    matches: [/^[a-zA-Z]+$/, 'must contain only letters'],
  },
  password: {
    type: String,
    required: true,
    select: false,
    maxlength: 100,
  },
});

export default model('User', userSchema);
