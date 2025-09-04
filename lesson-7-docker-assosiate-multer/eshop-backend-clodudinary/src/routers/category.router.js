import { Router } from "express";

import {
  getCategoriesController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryByIdController,
  deleteCategoryByIdController,
} from "../controllers/category.controller.js";

import upload from "../middlewares/upload.js";

import validateBody from "../decorators/validateBody.js";

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
  upload.single("image"),
  validateBody(categoryAddSchema),
  addCategoryController
);

categoryRouter.put(
  "/:id",
  validateBody(categoryUpdateSchema),
  updateCategoryByIdController
);

categoryRouter.delete("/:id", deleteCategoryByIdController);

export default categoryRouter;
