"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_js_1 = require("../controllers/order.controller.js");
const validateBody_js_1 = __importDefault(require("../decorators/validateBody.js"));
const checkRole_js_1 = __importDefault(require("../decorators/checkRole.js"));
const order_schemas_js_1 = require("../schemas/order.schemas.js");
const authenticate_js_1 = __importDefault(require("../middlewares/authenticate.js"));
const orderRouter = (0, express_1.Router)();
// orderRouter.use(authenticate);
orderRouter.get("/", order_controller_js_1.getOrdersController);
orderRouter.post("/", authenticate_js_1.default, (0, validateBody_js_1.default)(order_schemas_js_1.orderAddSchema), order_controller_js_1.addOrderController);
exports.default = orderRouter;
//# sourceMappingURL=order.router.js.map