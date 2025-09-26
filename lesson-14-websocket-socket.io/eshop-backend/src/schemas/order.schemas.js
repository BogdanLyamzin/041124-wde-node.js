import Joi from "joi";

const orderItemSchema = Joi.object({
    product: Joi.string().required(),
    count: Joi.number().min(1).required()
})

export const orderAddSchema = Joi.object({
    items: Joi.array().items(orderItemSchema)
})