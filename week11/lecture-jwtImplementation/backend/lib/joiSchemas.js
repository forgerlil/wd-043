import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(4).max(20).required(),
});

export const registrationSchema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(20).required(),
  lastName: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().required(),
  password: Joi.string().min(4).max(20).required(),
});
