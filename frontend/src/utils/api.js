import axios from 'axios';

const API_BASE = 'http://localhost:8082/api/transactions';

export const fetchTransactions = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
};

export const addTransaction = async (transaction) => {
    const response = await axios.post(API_BASE, transaction);
    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
};
