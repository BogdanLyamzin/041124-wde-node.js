"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hooks_js_1 = require("./hooks.js");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true });
categorySchema.virtual("products", {
    ref: "product",
    localField: "_id",
    foreignField: "category"
});
categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });
(0, hooks_js_1.addAllHooksToMongooseSchema)(categorySchema);
const Category = (0, mongoose_1.model)("category", categorySchema);
exports.default = Category;
//# sourceMappingURL=Category.js.map