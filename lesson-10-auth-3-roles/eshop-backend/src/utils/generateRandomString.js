import {randomBytes} from "node:crypto";

const generateRandomString = (length = 10) => randomBytes(length).toString("base64");

export default generateRandomString;