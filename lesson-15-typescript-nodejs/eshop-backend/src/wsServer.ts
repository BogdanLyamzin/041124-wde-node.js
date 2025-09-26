import { Server as SocketIOServer, Socket } from "socket.io";
import {createServer, Server} from "node:http";

import Order from "./db/models/Order.js";

const startWebSocketServer = (): void => {
    const httpServer: Server = createServer();
    const wsServer = new SocketIOServer(httpServer, {
        cors: {
            origin: "*"
        }
    });

    wsServer.on("connection", (socket: Socket) => {
        console.log("New frontend connected");
    })

    Order.watch().on("change", async data => {
        if(data.operationType === "insert") {
            const newOrder = await Order.findById(data.fullDocument._id).populate("user", "fullName email")
            .populate("items.product");
            // wsServer.emit("orderChange", {data: newOrder, operationType: "insert"});
            wsServer.emit("add-order", newOrder);
        }
        if(data.operationType === "delete") {
            // wsServer.emit("orderChange", {_id: data.documentKey._id, operationType: "delete"});
            wsServer.emit("delete-order", data.documentKey._id);
        }
        if(data.operationType === "update") {
            const updateOrder = await Order.findById(data.documentKey._id).populate("user", "fullName email")
            .populate("items.product");
            // wsServer.emit("orderChange", {data: updateOrder, operationType: "update"});
            wsServer.emit("update-order", updateOrder);
        }
    });

    const wsPort: number = Number(process.env.SOCKET_IO_PORT) || 5000;
    
    httpServer.listen(wsPort, ()=> console.log("Socket.io server running"))
}

export default startWebSocketServer;