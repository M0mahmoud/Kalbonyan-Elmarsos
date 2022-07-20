import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from './ExpenseList'
import ExpenseChart from "./ExpenseChart";
//import CSS file
import "./styles/Expenses.css";

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  //Filter Expense Years
  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // If Not Found any Expense => File ExpenseList

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart  expenses={filterExpense}/>
        <ExpenseList items={filterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
