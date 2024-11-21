const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    type: { type: String, enum: ['Income', 'Expense'], required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;