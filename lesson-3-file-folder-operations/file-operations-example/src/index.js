import fs from "node:fs/promises";
import {readFileSync} from "node:fs";
import path from "node:path";

const usersPath = path.resolve("src", "files", "users.txt");
const configPath = path.resolve("src", "files", "config.json");

// let config;
// try {
//     // const config = JSON.parse(readFileSync(configPath));
//     config = JSON.parse(await fs.readFile(configPath));
// }
// catch(error) {
//     console.log(error);
// }

// const connectDatabase = ()=> {
//     console.log(config);
// }

// connectDatabase();

const logOldPath = path.resolve("src", "files", "logs.txt");
const logNewPath = path.resolve("src", "files", "new", "logs.txt");

await fs.rename(logOldPath, logNewPath);

const logPath = path.resolve("src", "files", "logs", "logs.txt");
const logCopyPath = path.resolve("src", "files", "logs", "logs-copy.txt");

// await fs.copyFile(logPath, logCopyPath);
const deleteFile = async filePath => {
    try {
        await fs.unlink(filePath);
        return true;
    }
    catch(error) {
        if(error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

await deleteFile(logCopyPath);