"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const validateBody = schema => {
    const valdateBodyMiddleware = async (req, res, next) => {
        try {
            await schema.validateAsync(req.body, {
                abortEarly: false,
            });
            next();
        }
        catch (error) {
            throw (0, HttpError_js_1.default)(400, error.message);
        }
    };
    return valdateBodyMiddleware;
};
exports.default = validateBody;
//# sourceMappingURL=validateBody.js.map