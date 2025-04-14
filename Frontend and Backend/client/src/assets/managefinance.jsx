import React, { useState, useEffect } from 'react';
import './managefinance.css';

const ManageFinance = () => {
    const [budget, setBudget] = useState(5000);
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, []);

    const addExpense = () => {
        if (!amount || !description) {
            alert('Please enter a valid amount and description.');
            return;
        }

        const newExpense = { amount: parseFloat(amount), description };
        const updatedExpenses = [...expenses, newExpense];
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setBudget(budget - newExpense.amount);
        setAmount('');
        setDescription('');
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <h1 className="logo-title">ProCollabHub</h1>
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-item"><a href="/Dash" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Manage Finances</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <section className="finance-section">
                    <div className="finance-container">
                        <h2 className="finance-title">Manage Your Budget</h2>
                        <p className="budget-info">Total Budget: Rs {budget}</p>
                        <div className="expense-form">
                            <input 
                                type="number" 
                                placeholder="Enter amount" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder="Description" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button onClick={addExpense} className="add-expense-btn">Add Expense</button>
                        </div>
                        <h3 className="expenses-title">Expenses</h3>
                        <ul className="expenses-list">
                            {expenses.length > 0 ? (
                                expenses.map((expense, index) => (
                                    <li key={index} className="expense-item">
                                        {expense.description}: Rs {expense.amount}
                                    </li>
                                ))
                            ) : (
                                <p>No expenses added yet.</p>
                            )}
                        </ul>
                    </div>
                </section>
            </main>

            <footer>
                <div className="footer-container">
                    <p className="footer-text">&copy; 2024 ProCollabHub. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default ManageFinance;
