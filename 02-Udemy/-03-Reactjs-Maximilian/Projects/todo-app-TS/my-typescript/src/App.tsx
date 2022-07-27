import "./App.css";

import Todos from "./Components/Todos";
import NewTodo from "./Components/NewTodo";
import TodosContextProvider from "./store/todo-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
