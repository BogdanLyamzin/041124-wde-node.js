"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_js_1 = require("../controllers/auth.controller.js");
const validateBody_js_1 = __importDefault(require("../decorators/validateBody.js"));
const authenticate_js_1 = __importDefault(require("../middlewares/authenticate.js"));
const auth_schemas_js_1 = require("../schemas/auth.schemas.js");
const authRouter = (0, express_1.Router)();
//signup
authRouter.post("/register", (0, validateBody_js_1.default)(auth_schemas_js_1.registerSchema), auth_controller_js_1.registerController);
authRouter.post("/verify", (0, validateBody_js_1.default)(auth_schemas_js_1.verifyCodeSchema), auth_controller_js_1.verifyController);
authRouter.post("/password-restore", (0, validateBody_js_1.default)(auth_schemas_js_1.emailSchema), auth_controller_js_1.restorePasswordController);
authRouter.post("/new-password", (0, validateBody_js_1.default)(auth_schemas_js_1.newPasswordSchema), auth_controller_js_1.createNewPasswordController);
//signin
authRouter.post("/login", (0, validateBody_js_1.default)(auth_schemas_js_1.loginSchema), auth_controller_js_1.loginController);
authRouter.post("/refresh", auth_controller_js_1.refreshController);
authRouter.post("/logout", authenticate_js_1.default, auth_controller_js_1.logoutController);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map