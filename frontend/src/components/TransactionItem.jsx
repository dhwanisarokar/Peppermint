import React from 'react';

const TransactionItem = ({ transaction, onDeleteTransaction }) => {
    return (
        <li className="flex justify-between items-center p-2 border-b">
            <span className={transaction.type ==='Expense' ? "text-red-600" : "text-green-500"}>
                {transaction.description} - ${transaction.amount} ({transaction.type})
            </span>
                <samall>{new Date(transaction.date).toDateString()}</samall>
            <button
                onClick={() => onDeleteTransaction(transaction._id)}
                className="text-red-500 hover:underline"
            >
                Delete
            </button>
        </li>
    );
};

export default TransactionItem;
