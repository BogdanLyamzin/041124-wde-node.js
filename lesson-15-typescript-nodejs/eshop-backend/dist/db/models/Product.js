"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hooks_js_1 = require("./hooks.js");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    }
}, { versionKey: false, timestamps: true });
(0, hooks_js_1.addAllHooksToMongooseSchema)(productSchema);
const Product = (0, mongoose_1.model)("product", productSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map