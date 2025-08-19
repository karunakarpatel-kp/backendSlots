const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const obj = { message: "Hello World" };
  res.json(obj);
});

app.listen(5000, () => {
  console.log("Server Running at 5k");
});
