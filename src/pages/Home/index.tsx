import TitleHeader from "../../components/UI/TitleHeader";
import TodoList from "./TodoList";

import classes from "./index.module.css";
import TodoForm from "./TodoForm";
import { useState } from "react";

import Todo from "../../models/todo";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const updateTodoHandler = (id: string, text: string) => {
    const newTodos = [...todos];
    const itemIndex = newTodos.findIndex((el) => el.id === id);
    newTodos[itemIndex].text = text;
    setTodos(newTodos);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const doneHandler = (id: string) => {
    const newTodos = [...todos];
    const itemIndex = newTodos.findIndex((el) => el.id === id);
    newTodos[itemIndex].isDone = !newTodos[itemIndex].isDone;
    setTodos(newTodos);
  };

  return (
    <div className={classes.container}>
      <TitleHeader title="오늘 할 일" />
      <TodoList
        items={todos.filter((todo) => todo.isDone === false)}
        doneTodos={todos.filter((todo) => todo.isDone === true)}
        onUpdateTodo={updateTodoHandler}
        onDeleteTodo={deleteTodoHandler}
        onCompleteTodo={doneHandler}
      />
      <TodoForm onAddTodo={addTodoHandler} />
    </div>
  );
};

export default Home;
