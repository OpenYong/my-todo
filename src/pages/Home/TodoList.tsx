import React from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";
import Todo from "../../models/todo";

const TodoList: React.FC<{
  items: Todo[];
  onUpdateTodo: (id: string, text: string) => void;
}> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items
        .slice(0)
        .reverse()
        .map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onUpdateTodo={props.onUpdateTodo}
          />
        ))}
    </ul>
  );
};

export default TodoList;
