const express = require("express");

const transactionsArr = require("../models/transaction");

const transactions = express.Router();


transactions.get("/", (_, response) => {
  response.json(transactionsArr);
});

transactions.get("/:id", (request, response) => {
  const { index } = request.params;
  if (!transactionsArr[index]) {
    response.status(404).json({ error: "Transaction not found" });
  } else {
    response.status(200).json(transactionsArr[index]);
  }
});

transactions.post("/", (request, response) => {
  transactionsArr.push(request.body);
  response.status(201).json(transactionsArr);
});

transactions.delete("/:id", (request, response) => {
  const { index } = request.params;
  if (!transactionsArr[index]) {
    const [deleteTransaction] = transactionsArr.splice(index, i);
    response.status(200).json(deleteTransaction);
  } else {
    response.status(404);
  }
});

transactions.put("/:id", (request, response) => {
  transactionsArr.splice(request.params.index, 1, request.body);
  response.status(200).json(transactionsArr);
});

module.exports = transactions;
