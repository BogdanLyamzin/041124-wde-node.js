import {createReadStream, createWriteStream} from "node:fs";
import path from "path";

const usersPath = path.resolve("src", "files", "users.txt");
// const readUsersStream = createReadStream(usersPath, "utf-8");

// readUsersStream.on("data", chunk => { // chunk - кусок прочитанного файла
//     console.log("chunk", chunk);
// })

// readUsersStream.on("end", ()=> {
//     console.log("All users readed");
// });

// readUsersStream.on("error", error => {
//     console.log(error.message);
// })

// const logsPath = path.resolve("src", "files", "logs.txt");
// const logsWriteStream = createWriteStream(logsPath, "utf-8");

// logsWriteStream.write("GET /api/movies\n");
// logsWriteStream.write("POST /api/movies\n");

// logsWriteStream.end("Finish write logs");

// logsWriteStream.on("error", error => {
//     console.log(error.message);
// })

const namesPath = path.resolve("src", "files", "names.txt");

const readNamesStream = createReadStream(namesPath, "utf-8");
const namesCopyPath = path.resolve("src", "files", "names-copy.txt");
const writeNamesStream = createWriteStream(namesCopyPath, "utf-8");

readNamesStream.pipe(writeNamesStream);
