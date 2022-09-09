import TitleHeader from "../../components/UI/TitleHeader";
import TodoList from "./TodoList";

import classes from "./index.module.css";
import TodoForm from "./TodoForm";
import { useState } from "react";

import Todo from "../../models/todo";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      const newTodo = new Todo(text);
      return prevTodos.concat(newTodo);
    });
  };

  const updateTodoHandler = (id: string, text: string) => {
    const newTodos = todos;
    const itemIndex = newTodos.findIndex((el) => el.id === id);
    newTodos[itemIndex].text = text;
  };

  console.log(todos);

  return (
    <div className={classes.container}>
      <TitleHeader title="오늘 할 일" />
      <TodoList items={todos} onUpdateTodo={updateTodoHandler} />
      <TodoForm onAddTodo={addTodoHandler} />
    </div>
  );
};

export default Home;
