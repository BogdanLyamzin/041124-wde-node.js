"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addManagerController = exports.addAdminController = exports.getManagersController = exports.getAdminsController = void 0;
const admin_service_js_1 = require("../services/admin.service.js");
const getAdminsController = async (req, res) => {
    const admins = await (0, admin_service_js_1.getAdmins)();
    res.json(admins);
};
exports.getAdminsController = getAdminsController;
const getManagersController = async (req, res) => {
    const managers = await (0, admin_service_js_1.getAdmins)({ role: "manager" });
    res.json(managers);
};
exports.getManagersController = getManagersController;
const addAdminController = async (req, res) => {
    await (0, admin_service_js_1.addAdmin)({ ...req.body, role: "admin" });
    res.status(201).json({
        message: "Admin add successfully"
    });
};
exports.addAdminController = addAdminController;
const addManagerController = async (req, res) => {
    await (0, admin_service_js_1.addAdmin)({ ...req.body, role: "manager" });
    res.status(201).json({
        message: "Manager add successfully"
    });
};
exports.addManagerController = addManagerController;
//# sourceMappingURL=admin.controller.js.map