"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFoundHandler_js_1 = __importDefault(require("./middlewares/notFoundHandler.js"));
const errorHandler_js_1 = __importDefault(require("./middlewares/errorHandler.js"));
const admin_router_js_1 = __importDefault(require("./routers/admin.router.js"));
const auth_router_js_1 = __importDefault(require("./routers/auth.router.js"));
const category_router_js_1 = __importDefault(require("./routers/category.router.js"));
const product_router_js_1 = __importDefault(require("./routers/product.router.js"));
const order_router_js_1 = __importDefault(require("./routers/order.router.js"));
const validation_router_js_1 = __importDefault(require("./routers/validation.router.js"));
const startServer = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.static("public"));
    app.use("/api/admins", admin_router_js_1.default);
    app.use("/api/auth", auth_router_js_1.default);
    app.use("/api/categories", category_router_js_1.default);
    app.use("/api/products", product_router_js_1.default);
    app.use("/api/orders", order_router_js_1.default);
    app.use("/api/validation", validation_router_js_1.default);
    app.use(notFoundHandler_js_1.default);
    app.use(errorHandler_js_1.default);
    const port = Number(process.env.PORT) || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};
exports.default = startServer;
//# sourceMappingURL=server.js.map