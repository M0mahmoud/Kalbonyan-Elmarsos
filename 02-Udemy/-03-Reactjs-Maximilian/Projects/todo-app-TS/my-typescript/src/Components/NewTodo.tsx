import React, { useRef , useContext } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./styles/NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext)
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);

    todoTextRef.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">TODO </label>
      <input id="text" type="text" ref={todoTextRef} />
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
