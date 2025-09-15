import Joi from "joi";

export const productAddSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(1).required(),
    categoryId: Joi.number().min(1).required(),
})