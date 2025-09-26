import Joi from "joi";

import {
  emailValidation,
  passwordValidation,
} from "../contansts/auth.constants.js";

const email = Joi.string()
  .pattern(emailValidation.regexp.value, emailValidation.regexp.message)
  .required();

const password = Joi.string()
  .pattern(passwordValidation.regexp.value, passwordValidation.regexp.message)
  .min(passwordValidation.min.value)
  .required();

export const registerSchema = Joi.object({
  fullName: Joi.string().required(),
  email,
  password,
});

export const loginSchema = Joi.object({
  email,
  password,
});

export const verifyCodeSchema = Joi.object({
  code: Joi.string().required(),
});

export const emailSchema = Joi.object({
  email,
});

export const newPasswordSchema = Joi.object({
  code: Joi.string().required(),
  password,
})