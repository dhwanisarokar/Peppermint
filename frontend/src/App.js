import { useEffect, useState } from 'react';
import './App.css';
import { addTransaction, deleteTransaction, fetchTransactions } from './utils/api';
import TransactionForm from './components/TransactionForm';
import Header from './components/Header';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
    const [netBalance, setNetBalance] = useState(0);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        try {
            const { transactions, netBalance } = await fetchTransactions();
            setTransactions(transactions);
            setNetBalance(netBalance);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleAddTransaction = async (transaction) => {
        try {
            await addTransaction(transaction);
            loadTransactions();
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    const handleDeleteTransaction = async (id) => {
        try {
            await deleteTransaction(id);
            loadTransactions();
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Header netBalance={netBalance} />
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <TransactionList
                transactions={transactions}
                onDeleteTransaction={handleDeleteTransaction}
            />
        </div>
    );
}

export default App;
