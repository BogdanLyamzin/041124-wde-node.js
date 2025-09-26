"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = exports.refreshController = exports.loginController = exports.createNewPasswordController = exports.restorePasswordController = exports.verifyController = exports.registerController = void 0;
const auth_service_js_1 = require("../services/auth.service.js");
const setupSession = (res, { accessToken, refreshToken }) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });
};
const registerController = async (req, res) => {
    await (0, auth_service_js_1.registerUser)(req.body);
    res.status(201).json({
        message: "Register successfully",
    });
};
exports.registerController = registerController;
const verifyController = async (req, res) => {
    await (0, auth_service_js_1.verifyUser)(req.body.code);
    res.json({
        message: "User verify successfully",
    });
};
exports.verifyController = verifyController;
const restorePasswordController = async (req, res) => {
    await (0, auth_service_js_1.restoreUserPassword)(req.body.email);
    res.json({
        message: "Restore password link send to user email",
    });
};
exports.restorePasswordController = restorePasswordController;
const createNewPasswordController = async (req, res) => {
    await (0, auth_service_js_1.createNewUserPassword)(req.body);
    res.json({
        message: "Password changed successfully",
    });
};
exports.createNewPasswordController = createNewPasswordController;
const loginController = async (req, res) => {
    const session = await (0, auth_service_js_1.loginUser)(req.body);
    setupSession(res, session);
    res.json({
        message: "Login ssucessfully",
    });
};
exports.loginController = loginController;
const refreshController = async (req, res) => {
    const session = await (0, auth_service_js_1.refreshTokens)(req.cookies);
    setupSession(res, session);
    res.json({
        message: "Refresh ssucessfully",
    });
};
exports.refreshController = refreshController;
const logoutController = async (req, res) => {
    await (0, auth_service_js_1.logoutuser)(req.cookies);
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({
        message: "Logout successfully"
    });
};
exports.logoutController = logoutController;
//# sourceMappingURL=auth.controller.js.map