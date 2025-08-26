import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express(); // app - веб-сервер

app.use(cors());
// const corsMiddleware = cors();
// app.use(corsMiddleware)

// const cors = options => {
//     const corsMiddleware = (req, res, next)=> {
//         // add options
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//         res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//         res.setHeader("Access-Control-Allow-Credentials", true);
//         next();
//     }
//     return corsMiddleware;
// }

// app.use((req, res, next)=> {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    // res.setHeader("Access-Control-Allow-Credentials", true);
    // next();
// })

// app.set("json spaces", 4);

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// });

// app.get("/", (req, res)=> {
//     res.send("<h1>Home page</h1>");
// });

// app.get("/contacts", (req, res)=> {
//     res.send("<h1>Contacts page</h1>");
// });

app.get("/products", (req, res)=> {
    // const databaseResponse = null;
    // res.json(databaseResponse);
    // res.send(databaseResponse);
    res.json([]);
    // res.send([]);
})

app.get("/users", (req, res)=> {
    res.json(["Bohdan", "Nastya"]);
})

app.use((req, res)=> {
    res.status(404).json({
        message: `${req.url} not found`
    })
})

const port = Number(process.env.PORT) || 3000;

app.listen(port, ()=> console.log(`Server running on ${port} port`));