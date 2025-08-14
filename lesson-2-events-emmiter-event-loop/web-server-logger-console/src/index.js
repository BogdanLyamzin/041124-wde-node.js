import { createServer } from "node:http";

import { startServer, successRequest, errorRequest } from "./logger.js";

const app = createServer((req, res) => {
  const { url, method } = req;
  if (url === "/" && method === "GET") {
    successRequest({ method, url });
    res.setHeader("Content-type", "text/html");
    return res.end("<h1>Home page</h1>");
  }
  if (url === "/contacts" && method === "GET") {
    successRequest({ method, url });
    res.setHeader("Content-type", "text/html");
    return res.end("<h1>Contacts page</h1>");
  }

  errorRequest({ method, url });

  res.statusCode = 404;
  res.setHeader("Content-type", "text/html");
  return res.end(`<h1>Page ${url} not found</h1>`);
});

app.listen(3000, () => startServer(3000));
