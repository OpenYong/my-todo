import React, { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  isDone: boolean;
  onUpdateTodo: (id: string, text: string) => void;
  onDeleteTodo: () => void;
  onCompleteTodo: () => void;
}> = (props) => {
  const [todoText, setTodoText] = useState(props.text);

  const todoChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoText(e.currentTarget.value.trim());
    props.onUpdateTodo(props.id, e.currentTarget.value.trim());
  };

  const onBlurHandler = () => {
    if (todoText.trim() === "") {
      props.onDeleteTodo();
    }
  };

  return (
    <li className={classes.item}>
      <input
        type="checkbox"
        className={classes.checkbox}
        onChange={props.onCompleteTodo}
        checked={props.isDone}
      />
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

export default React.memo(TodoItem);
