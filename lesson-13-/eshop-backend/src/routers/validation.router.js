import { Router } from "express";

import { getValidationRulesController } from "../controllers/validation.controller.js";

const validationRouter = Router();

validationRouter.get("/rules", getValidationRulesController);

export default validationRouter;
