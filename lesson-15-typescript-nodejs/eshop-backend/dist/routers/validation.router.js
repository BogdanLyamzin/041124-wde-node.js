"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_controller_js_1 = require("../controllers/validation.controller.js");
const validationRouter = (0, express_1.Router)();
validationRouter.get("/rules", validation_controller_js_1.getValidationRulesController);
exports.default = validationRouter;
//# sourceMappingURL=validation.router.js.map