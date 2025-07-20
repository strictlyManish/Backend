const express = require("express");
const songRoute = require("../src/routes/song.route");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
app.use("/",songRoute);



module.exports = app;