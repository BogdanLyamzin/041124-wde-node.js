"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({
        message,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map