import React , {useContext}from "react";
import { TodosContext } from "../store/todo-context";

import classes from './styles/Todos.module.css'

import TodoIItem from "./TodoItem";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoIItem key={item.id} todoText={item.text}  onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
