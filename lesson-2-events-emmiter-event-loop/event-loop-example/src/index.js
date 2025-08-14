import axios from "axios";

console.log("Start");

setTimeout(()=> console.log("Timers phase"), 0);

// axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(({data})=> console.log("response"))
//     .catch(error => console.log(error));

Promise.resolve()
    .then(()=> console.log("Micro task"));

setImmediate(()=> console.log("Check phase"));

console.log("End");