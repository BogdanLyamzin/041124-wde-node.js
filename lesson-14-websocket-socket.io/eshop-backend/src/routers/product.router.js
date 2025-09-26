import { Router } from "express";

import {
  getProductsController,
  addProductController,
} from "../controllers/product.controller.js";

import authenticate from "../middlewares/authenticate.js";

import validateBody from "../decorators/validateBody.js";

import checkRole from "../decorators/checkRole.js";

import { productAddSchema } from "../schemas/product.schemas.js";

const productRouter = Router();

productRouter.get("/", getProductsController);

productRouter.post(
  "/",
  authenticate,
  checkRole("superadmin", "admin"),
  validateBody(productAddSchema),
  addProductController
);

export default productRouter;
