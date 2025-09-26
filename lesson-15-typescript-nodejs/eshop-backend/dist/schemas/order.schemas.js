"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderAddSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const orderItemSchema = joi_1.default.object({
    product: joi_1.default.string().required(),
    count: joi_1.default.number().min(1).required()
});
exports.orderAddSchema = joi_1.default.object({
    items: joi_1.default.array().items(orderItemSchema)
});
//# sourceMappingURL=order.schemas.js.map