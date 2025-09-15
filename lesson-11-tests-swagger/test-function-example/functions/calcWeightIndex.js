import Joi from "joi";

const argSchema = Joi.object({
    weight: Joi.number().min(0.01).required().messages({
        "number.min": "weight and height must be greater then 0",
        "any.required": "weight required"
    }),
    height: Joi.number().min(0.01).required().messages({
        "number.min": "weight and height must be greater then 0",
        "any.required": "height required"
    }),
})

const calcWeightIndex = (args) => {
    const {error} = argSchema.validate(args, {
        abortEarly: false,
    });

    if(error) throw error;

    const {weight, height} = args;

    const result = weight / (height ** 2);
    return  Number(result.toFixed(2));
}
// const calcWeightIndex = (...args) => {
//     if(args.length < 2) {
//         throw new Error('weight and height required');
//     }

//     const [weight, height] = args;

//     if(typeof weight !== "number" || typeof height !== "number") {
//         throw new Error('weight and height must be number');
//     }

//     if(weight <=0 || height <= 0) {
//         throw new Error('weight and height must be greater then 0')
//     }

//     if(weight < height) {
//         throw new Error('weight must be first argument and height - second')
//     }

//     const result = weight / (height ** 2);
//     return  Number(result.toFixed(2));
// }

export default calcWeightIndex;