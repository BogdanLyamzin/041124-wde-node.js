"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const checkRole = (...roleList) => {
    return (req, res, next) => {
        const role = req.user.role || "user";
        if (!roleList.includes(role)) {
            throw (0, HttpError_js_1.default)(403, `${role} not enough permissions`);
        }
        next();
    };
};
exports.default = checkRole;
//# sourceMappingURL=checkRole.js.map