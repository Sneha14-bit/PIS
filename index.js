//entry point
const express = require("express");
const db = require("./db/db");
const router = require("./route/route");
const app = express();
app.use(express.json());
app.use(router);

//app.post - to send data
//app.get - to fetch data
//const PORT = 5000;
// sneha

app.listen(5000, () => console.log("Server started"));
