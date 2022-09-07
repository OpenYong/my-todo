import TitleHeader from "../../components/UI/TitleHeader";
import TodoList from "./TodoList";

import classes from "./index.module.css";
import TodoForm from "./TodoForm";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat(text);
    });
  };

  return (
    <div className={classes.container}>
      <TitleHeader title="오늘 할 일" />
      <TodoList items={todos} />
      <TodoForm onAddTodo={addTodoHandler} />
    </div>
  );
};

export default Home;
