import { WebSocketServer } from "ws";

const wsServer = new WebSocketServer({port: 5000});

// const socketList = [];

wsServer.on("connection", (socket)=> {
    // socketList.push(socket);
    // console.log("New frontend connected")
    setTimeout(()=> socket.send("Welcome to websocket server"), 3000);
    // setTimeout(()=> socket.close(1000, "Sever restart after 15 minutes"), 5000);

    socket.on("close", (code, reason)=> {
        console.log(code);
        console.log(reason.toString());
        console.log(wsServer.clients.size);
    })

    wsServer.clients.forEach(item => {
        if(item !== socket) {
            item.send(`Now we have ${wsServer.clients.size} members`);
        }
    })
})