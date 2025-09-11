import HttpError from "../utils/HttpError.js";

const validateBody = schema => {
    const valdateBodyMiddleware = async(req, res, next)=> {
        try {
            await schema.validateAsync(req.body, {
                abortEarly: false,
            });
            next();
        }
        catch(error) {
            throw HttpError(400, error.message);
        }
    };

    return valdateBodyMiddleware;
}

export default validateBody;