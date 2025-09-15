import swaggerUI from "swagger-ui-express";
import {readFile} from "node:fs/promises";
import path from "node:path";

const docsPath = path.resolve("docs", "swagger.json");

const docs = JSON.parse(await readFile(docsPath, "utf-8"));

const swaggerDocs = [...swaggerUI.serve, swaggerUI.setup(docs)];

export default swaggerDocs;