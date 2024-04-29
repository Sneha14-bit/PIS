//entry point
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const router = require("./route/route");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(router);
//app.post - to send data
//app.get - to fetch data
//const PORT = 5000;
// sneha

app.listen(5000, () => console.log("Server started"));

