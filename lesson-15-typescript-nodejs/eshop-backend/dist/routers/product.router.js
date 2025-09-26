"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_js_1 = require("../controllers/product.controller.js");
const authenticate_js_1 = __importDefault(require("../middlewares/authenticate.js"));
const validateBody_js_1 = __importDefault(require("../decorators/validateBody.js"));
const checkRole_js_1 = __importDefault(require("../decorators/checkRole.js"));
const product_schemas_js_1 = require("../schemas/product.schemas.js");
const productRouter = (0, express_1.Router)();
productRouter.get("/", product_controller_js_1.getProductsController);
productRouter.post("/", authenticate_js_1.default, (0, checkRole_js_1.default)("superadmin", "admin"), (0, validateBody_js_1.default)(product_schemas_js_1.productAddSchema), product_controller_js_1.addProductController);
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map