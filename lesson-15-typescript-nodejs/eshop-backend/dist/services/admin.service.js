"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAdmin = exports.getAdmins = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Admin_js_1 = __importDefault(require("../db/models/Admin.js"));
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const getAdmins = (query) => Admin_js_1.default.find(query);
exports.getAdmins = getAdmins;
const addAdmin = async (payload) => {
    const { email, password } = payload;
    const admin = await Admin_js_1.default.findOne({ email });
    if (admin)
        throw (0, HttpError_js_1.default)(404, `Admin with email=${email} already exist`);
    const hashPassword = await bcrypt_1.default.hash(password, 10);
    return Admin_js_1.default.create({ ...payload, password: hashPassword });
};
exports.addAdmin = addAdmin;
//# sourceMappingURL=admin.service.js.map