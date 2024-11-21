const express = require('express');
const router = express.Router();
const { transactionsController } = require('../controllers/transactions.controller');

// Add Expense/Income
router.post('/', transactionsController.createTransaction);

// Delete Expense/Income
router.delete('/:id', transactionsController.deleteTransaction);

// Show Net Balance
router.get('/', transactionsController.getTransactions);

module.exports = router;
