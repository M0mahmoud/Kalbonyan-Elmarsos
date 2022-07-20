import ExpenseItem from "./ExpenseItem";
import './styles/ExpenseList.css'
const ExpenseList = props =>{
    // If Not Found any Expense
    if (props.items.length===0) {
      return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    }
  
  return(
    <ul className="expenses-list">
      {
        props.items.map((expense) => (
          <ExpenseItem
            //Key => For dat you need to set a [unique] value per list item
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  )
}

export default ExpenseList;