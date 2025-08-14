import EventEmitter from "node:events";

const emitter = new EventEmitter();

// emitter.addListener("welcome", ()=> {
//     console.log("Welcome to server");
// });

emitter.on("welcome", ()=> {
    console.log(`New user connect`);
});

const logWelcomeUserMessage = ({name, lastName})=> {
    console.log(`Welcome to server, ${name} ${lastName}`);
}

emitter.on("welcome", logWelcomeUserMessage);

emitter.once("start", ()=> {
    console.log("Start server");
})

setTimeout(()=> {
    emitter.emit("welcome", {name: "Bohdan", lastName: "Liamzin"});
    emitter.removeListener("welcome", logWelcomeUserMessage);
}, 3000);

setTimeout(()=> {
    emitter.emit("welcome", {name: "Bohdan", lastName: "Liamzin"});
    emitter.removeAllListeners("welcome");
}, 5000);

setTimeout(()=> {
    emitter.emit("welcome", {name: "Bohdan", lastName: "Liamzin"});
}, 7000);

setTimeout(()=> {
    emitter.emit("start");
}, 1000);

setTimeout(()=> {
    emitter.emit("start");
}, 2000);
