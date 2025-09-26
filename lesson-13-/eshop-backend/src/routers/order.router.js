import { Router } from "express";

import { getOrdersController, addOrderController } from "../controllers/order.controller.js";

import validateBody from "../decorators/validateBody.js";
import checkRole from "../decorators/checkRole.js";

import { orderAddSchema } from "../schemas/order.schemas.js";

import authenticate from "../middlewares/authenticate.js";

const orderRouter = Router();

orderRouter.use(authenticate);

orderRouter.get("/", checkRole("superadmin", "admin", "manager"), getOrdersController);

orderRouter.post("/", validateBody(orderAddSchema), addOrderController);

export default orderRouter;