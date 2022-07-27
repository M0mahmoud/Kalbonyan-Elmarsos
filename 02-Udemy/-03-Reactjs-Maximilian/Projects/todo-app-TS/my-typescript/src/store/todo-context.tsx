import React, { createContext, useState } from "react";
import { ReactNode } from "react";

import Todo from "../models/todo";

type TodosObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

type Props = { children: ReactNode };

const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
