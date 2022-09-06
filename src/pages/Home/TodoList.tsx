import React from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";

const TodoList: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
