"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const auth_service_js_1 = require("../services/auth.service.js");
const authenticate = async (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken)
        throw (0, HttpError_js_1.default)(401, "accessToken not found");
    const session = await (0, auth_service_js_1.findSession)({ accessToken });
    if (!session)
        throw (0, HttpError_js_1.default)(401, "session not found");
    if (session.accessTokenValidUntil < new Date())
        throw (0, HttpError_js_1.default)(401, "accessToken expired");
    const user = await (0, auth_service_js_1.findUserOrAdmin)({ _id: session.userId });
    if (!user)
        throw (0, HttpError_js_1.default)(401, "user not found");
    req.user = user;
    next();
};
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map