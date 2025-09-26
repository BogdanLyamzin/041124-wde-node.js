"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const auth_constants_js_1 = require("../../contansts/auth.constants.js");
const userSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        match: auth_constants_js_1.emailValidation.regexp.value,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verify: {
        type: Boolean,
        default: false,
        required: true,
    },
}, { versionKey: false, timestamps: true });
userSchema.virtual("orders", {
    ref: "order",
    localField: "_id",
    foreignField: "user"
});
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map