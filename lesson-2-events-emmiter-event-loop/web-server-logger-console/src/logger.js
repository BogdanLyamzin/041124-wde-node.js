import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.once("start-server", (port)=> {
    console.log(`Server running on ${port} port`);
});

emitter.on("success-request", ({url, method})=> {
    console.log(`Success request ${method} ${url}`);
});

emitter.on("error-request", ({url, method})=> {
    console.error(`Error request ${method} ${url}`);
});

export const startServer = port => emitter.emit("start-server", port);

export const successRequest = ({method, url}) => emitter.emit("success-request", {url, method});

export const errorRequest = ({method, url}) => emitter.emit("error-request", {url, method});

export default emitter;