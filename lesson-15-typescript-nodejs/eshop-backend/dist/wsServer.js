"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const node_http_1 = require("node:http");
const Order_js_1 = __importDefault(require("./db/models/Order.js"));
const startWebSocketServer = () => {
    const httpServer = (0, node_http_1.createServer)();
    const wsServer = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*"
        }
    });
    wsServer.on("connection", socket => {
        console.log("New frontend connected");
    });
    Order_js_1.default.watch().on("change", async (data) => {
        if (data.operationType === "insert") {
            const newOrder = await Order_js_1.default.findById(data.fullDocument._id).populate("user", "fullName email")
                .populate("items.product");
            // wsServer.emit("orderChange", {data: newOrder, operationType: "insert"});
            wsServer.emit("add-order", newOrder);
        }
        if (data.operationType === "delete") {
            // wsServer.emit("orderChange", {_id: data.documentKey._id, operationType: "delete"});
            wsServer.emit("delete-order", data.documentKey._id);
        }
        if (data.operationType === "update") {
            const updateOrder = await Order_js_1.default.findById(data.documentKey._id).populate("user", "fullName email")
                .populate("items.product");
            // wsServer.emit("orderChange", {data: updateOrder, operationType: "update"});
            wsServer.emit("update-order", updateOrder);
        }
    });
    httpServer.listen(process.env.SOCKET_IO_PORT, () => console.log("Socket.io server running"));
};
exports.default = startWebSocketServer;
//# sourceMappingURL=wsServer.js.map