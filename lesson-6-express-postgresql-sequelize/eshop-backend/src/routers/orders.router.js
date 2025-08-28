import { Router } from "express";

import {
  getOrdersController,
  getOrderByIdController,
  addOrderController,
  updateOrderByIdController,
  deleteOrderByIdController,
} from "../controllers/orders.controller.js";

const ordersRouter = Router();

ordersRouter.get("/", getOrdersController);

ordersRouter.get("/:id", getOrderByIdController);

ordersRouter.post("/", addOrderController);

ordersRouter.put("/:id", updateOrderByIdController);

ordersRouter.delete("/:id", deleteOrderByIdController);

export default ordersRouter;
