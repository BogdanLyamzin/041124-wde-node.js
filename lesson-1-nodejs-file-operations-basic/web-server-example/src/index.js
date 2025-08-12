import {createServer} from "node:http";

const server = createServer((request, response)=> {
    switch(request.url) {
        case "/":
            response.setHeader("Content-type", "text/html");
            return response.end("<h1>Home page<h1>");
        case "/contacts":
            response.setHeader("Content-type", "text/html");
            return response.end("<h1>Contacts page<h1>");
        default:
            response.statusCode = 404;
            response.setHeader("Content-type", "text/html");
            return response.end("<h1>Page not found<h1>");
    }
    // response.statusCode = 200;
    // response.setHeader("Content-type", "application/json");
    // response.end(JSON.stringify({message: "Response"}));
});

server.listen(3000, ()=> console.log("Server running on port 3000"))