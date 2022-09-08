import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const savaExpenseDataHandler = (enteredExpenseData) => {
		const expenseDate = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseDate);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};
	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>
					{' '}
					Add New Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={
						savaExpenseDataHandler
					}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
