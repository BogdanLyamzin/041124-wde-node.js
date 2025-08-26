// import { DateTime } from "luxon";

// const date = new Date()
// console.log(date.getFullYear())
// const date = DateTime.now();
// console.log(date.year);
// console.log(date.month);
// const utcDate = DateTime.utc();
// console.log(utcDate);
// const dateLA = DateTime.now().setZone("America/Los_Angeles");
// console.log(dateLA)
// const date = DateTime.now();
// console.log(date.plus({
//     days: 1
// }));
// console.log(date);
// const date = DateTime.now();
// console.log(date.toFormat("dd.MM.yyyy"));
import {createServer} from "node:http";
import "dotenv/config";

import { getCurrentWeather } from "./weather-api.js";

const server = createServer((req, res)=> {
    if(req.url === "/my-weather" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async ()=> {
            const {city} = JSON.parse(body);

            const currentWeather = await getCurrentWeather(city);
            res.statusCode = 200;
            res.setHeader("Content-type", "application/json");
            res.end(JSON.stringify(currentWeather));
        })
    }
});

const port = Number(process.env.PORT) || 3000;

server.listen(port, ()=> console.log(`Server running on ${port} port`));