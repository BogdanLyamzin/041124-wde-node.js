import Joi from "joi";

export const registerSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/).min(8).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/).min(8).required(),
});