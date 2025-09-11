import * as auth from "../contansts/auth.constants.js";

export const getValidationRulesController = (req, res)=> {
    res.json({
        auth,
    })
}