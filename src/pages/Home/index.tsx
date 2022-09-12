import TitleHeader from "../../components/UI/TitleHeader";
import TodoList from "./TodoList";

import classes from "./index.module.css";
import TodoForm from "./TodoForm";
import { useState, useMemo, useCallback } from "react";

import Todo from "../../models/todo";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text.trim());
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const updateTodoHandler = useCallback(
    (id: string, text: string) => {
      const newTodos = [...todos];
      const itemIndex = newTodos.findIndex((el) => el.id === id);
      newTodos[itemIndex].text = text;
      setTodos(newTodos);
    },
    [todos]
  );

  const deleteTodoHandler = useCallback(
    (id: string) => {
      setTodos((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id);
      });
    },
    [todos]
  );

  const doneHandler = useCallback(
    (id: string) => {
      const newTodos = [...todos];
      const itemIndex = newTodos.findIndex((el) => el.id === id);
      newTodos[itemIndex].isDone = !newTodos[itemIndex].isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className={classes.container}>
      <TitleHeader title="오늘 할 일" />
      <TodoList
        items={useMemo(() => todos, [todos])}
        onUpdateTodo={updateTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        onCompleteTodo={doneHandler}
      />
      <TodoForm onAddTodo={addTodoHandler} />
    </div>
  );
};

export default Home;
