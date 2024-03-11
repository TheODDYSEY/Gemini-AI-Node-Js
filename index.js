const express = require("express");
const bodyParser = require("body-parser");
const { generateResponse, history } = require("./controllers/index.js");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware to parse the body content to JSON
app.use(bodyParser.json());

// Route to generate response
app.post("/generate", generateResponse);

// Route to check response history
app.get("/history", (req, res) => {
  res.send(history);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

