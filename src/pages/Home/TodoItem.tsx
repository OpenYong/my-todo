import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onUpdateTodo: (id: string, text: string) => void;
  onDeleteTodo: () => void;
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
      <input type="checkbox" className={classes.checkbox} />
      <label htmlFor={props.id}></label>
      <input
        id={props.id}
        type="text"
        value={todoText}
        onChange={todoChangeHandler}
        onBlur={onBlurHandler}
        className={classes.input}
      />
      <button className={classes["btn-delete"]} onClick={props.onDeleteTodo}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
};

export default TodoItem;
