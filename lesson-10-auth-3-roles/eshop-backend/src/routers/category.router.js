import { Router } from "express";

import {
  getCategoriesController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryByIdController,
  deleteCategoryByIdController,
} from "../controllers/category.controller.js";

import upload from "../middlewares/upload.js";
import authenticate from "../middlewares/authenticate.js";

import validateBody from "../decorators/validateBody.js";

import checkRole from "../decorators/checkRole.js";

import {
  categoryAddSchema,
  categoryUpdateSchema,
} from "../schemas/category.schemas.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategoriesController);

categoryRouter.get("/:id", getCategoryByIdController);

// upload.fields([{
//   name: "image",
//   maxCount: 1,
// }])
// upload.array("image", 8);
categoryRouter.post(
  "/",
  authenticate,
  checkRole("superadmin", "admin"),
  upload.single("image"),
  validateBody(categoryAddSchema),
  addCategoryController
);

categoryRouter.put(
  "/:id",
  authenticate,
  checkRole("superadmin", "admin"),
  validateBody(categoryUpdateSchema),
  updateCategoryByIdController
);

categoryRouter.delete(
  "/:id",
  authenticate,
  checkRole("superadmin", "admin"),
  deleteCategoryByIdController
);

export default categoryRouter;
