import Joi from "joi";

export const categoryAddSchema = Joi.object({
    name: Joi.string().required(),
})

export const categoryUpdateSchema = Joi.object({
    name: Joi.string(),
})
