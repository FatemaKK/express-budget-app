const express = require("express");
const cors = require("cors");

const transaction = require("./models/transaction");
const transactionsController = require("./controllers/transactionsController");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (request, response) => {
  response.send("<h1>💰💰💰 TRACKER</h1>");
});

app.get("/transactions", (request, response) => {
  response.send(transaction);
});

module.exports = app;
