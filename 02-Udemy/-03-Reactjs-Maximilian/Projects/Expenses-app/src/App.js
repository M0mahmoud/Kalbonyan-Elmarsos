//import file to usse
import React ,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const DUMY_EXPENSE = [ ];

const  App = () =>{
  const [expenses , setExpenses] = useState(DUMY_EXPENSE)
  //function add date from newExpense to App
  const addExpenseHandler=expense=>{
    setExpenses(prevExpense=>{
      return[expense , ...prevExpense]
    })
  }
  return (
    <div>
      <NewExpense  onAddExpense ={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
