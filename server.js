/* eslint-disable no-console */
const express = require("express");
const app = express();

app.use(express.static("dist"));
app.listen(process.env.port || 8080);
