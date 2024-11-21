import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
    return (
        <ul className="mt-4">
            {transactions.length === 0 ? (
                <p className="text-center text-gray-500">No transactions to display</p>
            ) : (
                transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction._id}
                        transaction={transaction}
                        onDeleteTransaction={onDeleteTransaction}
                    />
                ))
            )}
        </ul>
    );
};

export default TransactionList;
