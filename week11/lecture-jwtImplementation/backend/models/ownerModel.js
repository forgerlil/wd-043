import { Schema, model } from 'mongoose';

const ownerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 20,
      match: [
        /^[a-zA-Z-\s]+$/,
        'must contain only letters and up to 20 characters',
      ],
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 20,
      match: [
        /^[a-zA-Z-\s]+$/,
        'must contain only letters and up to 20 characters',
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        'is not a valid email',
      ],
    },
    password: {
      type: String,
      required: true,
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
        'must contain at least one uppercase letter, one lowercase letter, one number and be between 8 and 20 characters long',
      ],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Owner', ownerSchema);
