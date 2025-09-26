"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProducts = void 0;
const Product_js_1 = __importDefault(require("../db/models/Product.js"));
const getProducts = () => Product_js_1.default.find().populate("category", "-createdAt -updatedAt");
exports.getProducts = getProducts;
const addProduct = payload => Product_js_1.default.create(payload);
exports.addProduct = addProduct;
//# sourceMappingURL=product.service.js.map