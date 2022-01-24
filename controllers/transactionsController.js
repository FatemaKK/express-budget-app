const express = require("express");

const transactionsArr = require("../models/transaction");

const transactions = express.Router();

transactions.get("/", (_, response) => {
  response.json(transactionsArr);
});

// GET
transactions.get("/:id", (request, response) => {
  const { id } = request.params;
  if (!transactionsArr[id]) {
    response.status(404).json({ error: "Transaction not found" });
  } else {
    response.status(200).json(transactionsArr[id]);
  }
});

// POST
transactions.post("/", (request, response) => {
  transactionsArr.push(request.body);
  response.status(201).json(transactionsArr);
});

// DELETE
transactions.delete("/:id", (request, response) => {
  const { id } = request.params;
  if (transactionsArr[id]) {
    const deleteTransaction = transactionsArr.splice(id, 1);
    response.status(200).json(deleteTransaction);
  } else {
    response.status(404);
  }
});

// PUT
transactions.put("/:id", (request, response) => {
  const { id } = request.params;
  if (transactionsArr[id]) {
    transactionsArr[id] = request.body;
    response.status(200).json(transactionsArr[id]);
  } else {
    response.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
