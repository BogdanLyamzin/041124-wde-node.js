import "dotenv/config";

import connectDatabase from "./db/connectDatabase";
import startServer from "./server";
import startWebSocketServer from "./wsServer";

const bootstrap = async(): Promise<void> => {
    await connectDatabase();
    startServer();
    startWebSocketServer();
}

bootstrap();