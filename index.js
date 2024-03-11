const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/generate", (req, res) => {
  res.send(history);
});

const bodyParser = require("body-parser");
const { generateResponse } = require("./controllers/index.js");

//middleware to parse the body content to JSON
app.use(bodyParser.json());

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
