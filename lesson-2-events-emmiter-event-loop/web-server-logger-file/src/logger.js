import EventEmitter from "node:events";
import fs from "node:fs/promises";
import path from "node:path";

const emitter = new EventEmitter();

const logsPath = path.resolve("src", "logs.txt");

const getNowISODate = () => new Date().toISOString();

emitter.once("start-server", async (port) => {
  await fs.appendFile(
    logsPath,
    `${getNowISODate()} - Server running on ${port} port\n`
  );
});

emitter.on("success-request", async ({ url, method }) => {
  await fs.appendFile(
    logsPath,
    `${getNowISODate()} - Success request ${method} ${url}\n`
  );
});

emitter.on("error-request", async ({ url, method }) => {
  await fs.appendFile(
    logsPath,
    `${getNowISODate()} - Error request ${method} ${url}\n`
  );
});

export const startServer = (port) => emitter.emit("start-server", port);

export const successRequest = ({ method, url }) =>
  emitter.emit("success-request", { url, method });

export const errorRequest = ({ method, url }) =>
  emitter.emit("error-request", { url, method });

export default emitter;
