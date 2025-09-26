"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductController = exports.getProductsController = void 0;
const product_service_js_1 = require("../services/product.service.js");
const getProductsController = async (req, res) => {
    const products = await (0, product_service_js_1.getProducts)();
    res.json(products);
};
exports.getProductsController = getProductsController;
const addProductController = async (req, res) => {
    const data = await (0, product_service_js_1.addProduct)(req.body);
    res.status(201).json(data);
};
exports.addProductController = addProductController;
//# sourceMappingURL=product.controller.js.map