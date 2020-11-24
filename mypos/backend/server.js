// npx nodemon server.js

const express = require("express");
const app = express();

app.use("/api/v2", require("./api"));

app.listen(8081, () => {
  console.log("server is running.");
});