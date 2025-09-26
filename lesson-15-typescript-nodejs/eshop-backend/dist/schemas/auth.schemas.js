"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPasswordSchema = exports.emailSchema = exports.verifyCodeSchema = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const auth_constants_js_1 = require("../contansts/auth.constants.js");
const email = joi_1.default.string()
    .pattern(auth_constants_js_1.emailValidation.regexp.value, auth_constants_js_1.emailValidation.regexp.message)
    .required();
const password = joi_1.default.string()
    .pattern(auth_constants_js_1.passwordValidation.regexp.value, auth_constants_js_1.passwordValidation.regexp.message)
    .min(auth_constants_js_1.passwordValidation.min.value)
    .required();
exports.registerSchema = joi_1.default.object({
    fullName: joi_1.default.string().required(),
    email,
    password,
});
exports.loginSchema = joi_1.default.object({
    email,
    password,
});
exports.verifyCodeSchema = joi_1.default.object({
    code: joi_1.default.string().required(),
});
exports.emailSchema = joi_1.default.object({
    email,
});
exports.newPasswordSchema = joi_1.default.object({
    code: joi_1.default.string().required(),
    password,
});
//# sourceMappingURL=auth.schemas.js.map