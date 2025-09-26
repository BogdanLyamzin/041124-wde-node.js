"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hooks_js_1 = require("./hooks.js");
const sessionSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        required: true,
    },
    accessTokenValidUntil: {
        type: Date,
        required: true,
    },
    refreshTokenValidUntil: {
        type: Date,
        required: true,
    },
}, { versionKey: false, timestamps: true });
(0, hooks_js_1.addAllHooksToMongooseSchema)(sessionSchema);
const Session = (0, mongoose_1.model)("session", sessionSchema);
exports.default = Session;
//# sourceMappingURL=Session.js.map