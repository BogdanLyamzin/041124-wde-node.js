"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUpdateSchema = exports.categoryAddSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.categoryAddSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.categoryUpdateSchema = joi_1.default.object({
    name: joi_1.default.string(),
});
//# sourceMappingURL=category.schemas.js.map