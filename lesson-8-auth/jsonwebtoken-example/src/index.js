import jwt from "jsonwebtoken";
import "dotenv/config";

const {JWT_SECRET} = process.env;

const payload = {
    email: "bafehag141@lespedia.com"
};

const token = jwt.sign(payload, JWT_SECRET, {expiresIn: "1h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {email} = jwt.verify(token, JWT_SECRET);
    console.log(email);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhZmVoYWcxNDFAbGVzcGVkaWEuY29tIiwiaWF0IjoxNzU3MDExMzUwLCJleHAiOjE3NTcwMTQ5NTB9.wbgLPAXhvVgIh3jgTsTgACxS8gYPfbZKtydaue9qPaS";
    jwt.verify(invalidToken, JWT_SECRET)
}
catch(error) {
    console.log(error.message);
}
