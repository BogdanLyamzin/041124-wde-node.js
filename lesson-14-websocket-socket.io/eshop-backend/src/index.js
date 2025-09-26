import "dotenv/config";

import connectDatabase from "./db/connectDatabase.js";
import startServer from "./server.js";
import startWebSocketServer from "./wsServer.js";

const bootstrap = async()=> {
    await connectDatabase();
    startServer();
    startWebSocketServer();
}

bootstrap();