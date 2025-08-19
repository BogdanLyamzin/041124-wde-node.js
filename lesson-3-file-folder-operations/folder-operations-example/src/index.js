import fs from "node:fs/promises";
import path from "node:path";

const filesPath = path.resolve("src", "files");

const createDir = async (dirPath) => {
  try {
    await fs.mkdir(dirPath);
    return true;
  } catch (error) {
    if(error.code === "EEXIST") {
        return false
    }
    throw error;
  }
};

const deleteDir = async (dirPath) => {
    try {
        await fs.rmdir(dirPath)
    }
    catch(error) {
        if(error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

// createDir(filesPath);
// deleteDir(filesPath)

// const filesPath2 = path.resolve("src", "files", "logs");
// createDir(filesPath2);
// const logsPath = path.resolve("src", "files", "logs.txt")
// await fs.writeFile(logsPath, "");

const isFolderAccess = async folderPath => {
    try {
        await fs.access(folderPath);
        return true;
    }
    catch(error) {
        if(error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}

const filesDir = path.resolve("src", "files");
const isFilesDirCreated = await isFolderAccess(filesDir);
// console.log(isFilesDirCreated);
const logPath = path.resolve("src", "files", "logs", "logs.txt");
const isLogsCreated = await isFolderAccess(logPath);
console.log(isLogsCreated)
// const files = await fs.readdir(filesDir);
// for(const file of files) {
//     const extension = path.extname(file);
//     if(extension) {
//         console.log(`${file} is file`);
//         continue;
//     }
//     console.log(`${file} is folder`);
// }

