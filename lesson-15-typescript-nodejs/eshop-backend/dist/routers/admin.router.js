"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_js_1 = require("../controllers/admin.controller.js");
const authenticate_js_1 = __importDefault(require("../middlewares/authenticate.js"));
const checkRole_js_1 = __importDefault(require("../decorators/checkRole.js"));
const validateBody_js_1 = __importDefault(require("../decorators/validateBody.js"));
const auth_schemas_js_1 = require("../schemas/auth.schemas.js");
const adminRouter = (0, express_1.Router)();
adminRouter.use(authenticate_js_1.default);
adminRouter.get("/", (0, checkRole_js_1.default)("superadmin"), admin_controller_js_1.getAdminsController);
adminRouter.get("/managers", (0, checkRole_js_1.default)("superadmin", "admin"), admin_controller_js_1.getManagersController);
adminRouter.post("/admin", (0, checkRole_js_1.default)("superadmin"), 
// validateBody(registerSchema),
admin_controller_js_1.addAdminController);
adminRouter.post("/manager", (0, checkRole_js_1.default)("superadmin", "admin"), (0, validateBody_js_1.default)(auth_schemas_js_1.registerSchema), admin_controller_js_1.addManagerController);
exports.default = adminRouter;
//# sourceMappingURL=admin.router.js.map