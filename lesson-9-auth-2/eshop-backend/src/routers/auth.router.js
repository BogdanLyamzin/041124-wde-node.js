import { Router } from "express";

import {
  registerController,
  verifyController,
  loginController,
  restorePasswordController,
  createNewPasswordController,
  refreshController,
} from "../controllers/auth.controller.js";

import validateBody from "../decorators/validateBody.js";

import {
  registerSchema,
  loginSchema,
  verifyCodeSchema,
  emailSchema,
  newPasswordSchema,
} from "../schemas/auth.schemas.js";

const authRouter = Router();

//signup
authRouter.post("/register", validateBody(registerSchema), registerController);

authRouter.post("/verify", validateBody(verifyCodeSchema), verifyController);

authRouter.post("/password-restore", validateBody(emailSchema), restorePasswordController);

authRouter.post("/new-password", validateBody(newPasswordSchema), createNewPasswordController);

//signin
authRouter.post("/login", validateBody(loginSchema), loginController);

authRouter.post("/refresh", refreshController);

export default authRouter;
