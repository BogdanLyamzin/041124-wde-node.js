"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_js_1 = require("../controllers/category.controller.js");
const upload_js_1 = __importDefault(require("../middlewares/upload.js"));
const authenticate_js_1 = __importDefault(require("../middlewares/authenticate.js"));
const validateBody_js_1 = __importDefault(require("../decorators/validateBody.js"));
const checkRole_js_1 = __importDefault(require("../decorators/checkRole.js"));
const category_schemas_js_1 = require("../schemas/category.schemas.js");
const categoryRouter = (0, express_1.Router)();
categoryRouter.get("/", category_controller_js_1.getCategoriesController);
categoryRouter.get("/:id", category_controller_js_1.getCategoryByIdController);
// upload.fields([{
//   name: "image",
//   maxCount: 1,
// }])
// upload.array("image", 8);
categoryRouter.post("/", authenticate_js_1.default, (0, checkRole_js_1.default)("superadmin", "admin"), upload_js_1.default.single("image"), (0, validateBody_js_1.default)(category_schemas_js_1.categoryAddSchema), category_controller_js_1.addCategoryController);
categoryRouter.put("/:id", authenticate_js_1.default, (0, checkRole_js_1.default)("superadmin", "admin"), (0, validateBody_js_1.default)(category_schemas_js_1.categoryUpdateSchema), category_controller_js_1.updateCategoryByIdController);
categoryRouter.delete("/:id", authenticate_js_1.default, (0, checkRole_js_1.default)("superadmin", "admin"), category_controller_js_1.deleteCategoryByIdController);
exports.default = categoryRouter;
//# sourceMappingURL=category.router.js.map