import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseDateHandler = (enteredDate) => {
    const expenseDate = {
      ...enteredDate,
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
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={SaveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}{" "}
    </div>
  );
};

export default NewExpense;
