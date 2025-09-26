"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = require("node:crypto");
const generateRandomString = (length = 10) => (0, node_crypto_1.randomBytes)(length).toString("base64");
exports.default = generateRandomString;
//# sourceMappingURL=generateRandomString.js.map