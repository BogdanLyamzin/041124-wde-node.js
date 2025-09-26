"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const auth_constants_js_1 = require("../../contansts/auth.constants.js");
const hooks_js_1 = require("./hooks.js");
const adminSchema = new mongoose_1.Schema({
    fullName: {
        type: String,
        required: [true, "fullName must be exist"],
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
    role: {
        type: String,
        enum: ['manager', 'admin', 'superadmin'],
        required: true,
    },
    verify: {
        type: Boolean,
        default: true,
        required: true,
    }
}, { versionKey: false, timestamps: true });
(0, hooks_js_1.addAllHooksToMongooseSchema)(adminSchema);
const Admin = (0, mongoose_1.model)("admin", adminSchema);
exports.default = Admin;
//# sourceMappingURL=Admin.js.map