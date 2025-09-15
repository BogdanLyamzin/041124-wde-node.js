import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import swaggerDocs from "./middlewares/swaggerDocs.js";

import adminRouter from "./routers/admin.router.js";
import authRouter from "./routers/auth.router.js";
import categoryRouter from "./routers/category.router.js";
import productRouter from "./routers/product.router.js";
import validationRouter from "./routers/validation.router.js";

const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.static("public"));

    app.use("/docs", swaggerDocs);
    app.use("/api/admins", adminRouter);
    app.use("/api/auth", authRouter);
    app.use("/api/categories", categoryRouter);
    app.use("/api/products", productRouter);
    app.use("/api/validation", validationRouter);

    app.use(notFoundHandler);

    app.use(errorHandler);

    const port = Number(process.env.PORT) || 3000;

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;