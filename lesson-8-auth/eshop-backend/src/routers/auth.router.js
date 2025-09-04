import { Router } from "express";

import { registerController, verifyController, loginController } from "../controllers/auth.controller.js";

import validateBody from "../decorators/validateBody.js";

import { registerSchema, loginSchema } from "../schemas/auth.schemas.js";

const authRouter = Router();

//signup
authRouter.post("/register", validateBody(registerSchema), registerController);

authRouter.get("/verify", verifyController);

//signin
authRouter.post("/login", validateBody(loginSchema), loginController);

export default authRouter;