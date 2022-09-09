import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onUpdateTodo: (id: string, text: string) => void;
}> = (props) => {
  const [todoText, setTodoText] = useState(props.text);

  const todoChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoText(e.currentTarget.value);
  };

  const onBlurHandler = () => {
    props.onUpdateTodo(props.id, todoText);
  };

  return (
    <li className={classes.item}>
      <input type="checkbox" />
      <input
        type="text"
        value={todoText}
        onChange={todoChangeHandler}
        onBlur={onBlurHandler}
      />
    </li>
  );
};

export default TodoItem;
