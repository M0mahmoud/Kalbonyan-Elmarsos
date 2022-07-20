import React from "react";

// import CSS File
import "./styles/ExpensesDate.css";

const ExpensesDate=(props) =>{
  // The toLocaleString() method returns a string with a language sensitive representation of this date.
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpensesDate;
