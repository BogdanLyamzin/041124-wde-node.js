"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderController = exports.getOrdersController = void 0;
const order_service_js_1 = require("../services/order.service.js");
const getOrdersController = async (req, res) => {
    const data = await (0, order_service_js_1.getOrders)();
    res.json(data);
};
exports.getOrdersController = getOrdersController;
const addOrderController = async (req, res) => {
    const data = await (0, order_service_js_1.addOrder)({
        ...req.body,
        user: req.user._id,
    });
    res.status(201).json(data);
};
exports.addOrderController = addOrderController;
//# sourceMappingURL=order.controller.js.map