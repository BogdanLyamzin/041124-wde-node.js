import fs from "node:fs/promises";
import path from "node:path";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

// fs.readFile("./src/data/notes.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
// })

// fs.readFile("./src/data/notes.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// const buffer = await fs.readFile("./src/data/notes.txt");
// console.log(buffer);

// const notesPath = path.join(process.cwd(), "src", "data", "notes.txt");
const notesPath = path.resolve("src", "data", "notes.txt");

const fileOperations = async()=> {
    // const buffer = await fs.readFile(notesPath);
    // const text = buffer.toString();
    // console.log(text);
    // const text = await fs.readFile(notesPath, "utf-8");
    // console.log(text)
    // const {encoding} = await DetectFileEncodingAndLanguage(notesPath);
    // const text = await fs.readFile(notesPath, encoding);
    // console.log(text)
    // await fs.appendFile(notesPath, "\nСоздать новые баги");
    // await fs.writeFile(notesPath, "Не делать больше багов");
    // const text = await fs.readFile("./src/data/notes2.text", "utf-8");
    // await fs.appendFile("./src/data/notes2.txt", "\nСоздать новые баги");
    // await fs.writeFile("./src/data/notes3.txt", "Не делать больше багов");
    // await fs.unlink("./src/data/notes3.txt");
}

fileOperations();