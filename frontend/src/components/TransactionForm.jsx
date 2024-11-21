import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
    const [form, setForm] = useState({
        amount: '',
        description: '',
        type: 'Income',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.amount || !form.description || !form.date) {
            return alert('Please fill in all fields');
        }
        onAddTransaction(form);
        setForm({ amount: '', description: '', type: 'Income', date: '' });
    };

    return (
        <form className="mt-4 p-4 bg-gray-100 rounded shadow-md" onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="border rounded p-2 w-full mt-2"
            />
            <input
                type="text"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="border rounded p-2 w-full mt-2"
            />
            <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="border rounded p-2 w-full mt-2"
            >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="border rounded p-2 w-full mt-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full"
            >
                Add Transaction
            </button>
        </form>
    );
};

export default TransactionForm;
