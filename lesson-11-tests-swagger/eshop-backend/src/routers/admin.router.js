import { Router } from "express";

import {
  getAdminsController,
  getManagersController,
  addAdminController,
  addManagerController,
} from "../controllers/admin.controller.js";

import authenticate from "../middlewares/authenticate.js";

import checkRole from "../decorators/checkRole.js";

import validateBody from "../decorators/validateBody.js";

import { registerSchema } from "../schemas/auth.schemas.js";

const adminRouter = Router();

adminRouter.use(authenticate);

adminRouter.get("/", checkRole("superadmin"), getAdminsController);

adminRouter.get(
  "/managers",
  checkRole("superadmin", "admin"),
  getManagersController
);

adminRouter.post(
  "/admin",
  checkRole("superadmin"),
  validateBody(registerSchema),
  addAdminController
);

adminRouter.post(
  "/manager",
  checkRole("superadmin", "admin"),
  validateBody(registerSchema),
  addManagerController
);

// adminRouter.post("/manager", )

export default adminRouter;
