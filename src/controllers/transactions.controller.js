const Transaction = require("../models/Transantion");

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const totalIncome = transactions
      .filter((t) => t.type === "Income")
      .reduce((acc, t) => acc + t.amount, 0);
    const totalExpenses = transactions
      .filter((t) => t.type === "Expense")
      .reduce((acc, t) => acc + t.amount, 0);
    res
      .status(200)
      .json({ transactions, netBalance: totalIncome - totalExpenses });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createTransaction = async (req, res) => {
  try {
    const { amount, description, type, date } = req.body;
    const transaction = await Transaction.create({
      amount,
      description,
      type,
      date,
  });
    // await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message });
  }
};

module.exports.transactionsController = {
  createTransaction,
  deleteTransaction,
  getTransactions,
};
