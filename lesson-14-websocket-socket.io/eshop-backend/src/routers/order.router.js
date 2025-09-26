import { Router } from "express";

import { getOrdersController, addOrderController } from "../controllers/order.controller.js";

import validateBody from "../decorators/validateBody.js";
import checkRole from "../decorators/checkRole.js";

import { orderAddSchema } from "../schemas/order.schemas.js";

import authenticate from "../middlewares/authenticate.js";

const orderRouter = Router();

// orderRouter.use(authenticate);

orderRouter.get("/", getOrdersController);

orderRouter.post("/", authenticate, validateBody(orderAddSchema), addOrderController);

export default orderRouter;