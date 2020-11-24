// npx nodemon server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/uploaded"));
app.use("/api/v2", require("./api"));

app.listen(8081, () => {
  console.log("server is running.");
});
