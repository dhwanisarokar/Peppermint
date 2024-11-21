import React from 'react';

const Header = ({ netBalance }) => {
    return (
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
            <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
            <h2 className="text-xl text-center mt-2">
                Net Balance: <span className="font-semibold">${netBalance}</span>
            </h2>
        </div>
    );
};

export default Header;
