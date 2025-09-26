"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = exports.getOrders = void 0;
const Order_js_1 = __importDefault(require("../db/models/Order.js"));
const getOrders = () => Order_js_1.default.find()
    .populate("user", "fullName email")
    .populate("items.product");
exports.getOrders = getOrders;
const addOrder = (payload) => Order_js_1.default.create(payload);
exports.addOrder = addOrder;
//# sourceMappingURL=order.service.js.map