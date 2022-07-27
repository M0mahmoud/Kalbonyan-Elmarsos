import React from "react";
import classes from "./styles/TodoItem.module.css";

const TodoItem: React.FC<{
  todoText: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <div className={classes.div}>
      <li className={classes.item}>{props.todoText}</li>
      <button onClick={props.onRemoveTodo}>Delete</button>
    </div>
  );
};

export default TodoItem;
