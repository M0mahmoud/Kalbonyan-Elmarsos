import React from "react";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

//import CSS file
import "./styles/ExpenseItem.css";

const ExpenseItem = (props) => {
  //Function To update Title & Must Called Direct In Component Function
  // const [title , setTitle] = useState(props.title)
  //Function for button
  // const clickHandler =()=>{
  //   setTitle('Updated')
  //   console.log(title)
  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
