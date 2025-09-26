"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hooks_js_1 = require("./hooks.js");
const orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    items: [{
            product: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "product",
                required: true,
            },
            count: {
                type: Number,
                min: 1,
                required: true,
            }
        }]
}, { versionKey: false, timestamps: true });
(0, hooks_js_1.addAllHooksToMongooseSchema)(orderSchema);
const Order = (0, mongoose_1.model)("order", orderSchema);
exports.default = Order;
//# sourceMappingURL=Order.js.map