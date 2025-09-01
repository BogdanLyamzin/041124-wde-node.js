import { Router } from "express";

import {
  getCategoriesController,
  getCategoryByIdController,
  addCategoryController,
  updateCategoryByIdController,
  deleteCategoryByIdController,
} from "../controllers/category.controller.js";

import validateBody from "../decorators/validateBody.js";

import { categoryAddSchema, categoryUpdateSchema } from "../schemas/category.schemas.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategoriesController);

categoryRouter.get("/:id", getCategoryByIdController);

categoryRouter.post(
  "/",
  validateBody(categoryAddSchema),
  addCategoryController
);

categoryRouter.put("/:id", 
    validateBody(categoryUpdateSchema),
    updateCategoryByIdController
);

categoryRouter.delete("/:id", deleteCategoryByIdController);

export default categoryRouter;
