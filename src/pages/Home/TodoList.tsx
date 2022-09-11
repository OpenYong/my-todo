import React from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";
import Todo from "../../models/todo";

const TodoList: React.FC<{
  items: Todo[];
  doneTodos: Todo[];
  onUpdateTodo: (id: string, text: string) => void;
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}> = (props) => {
  console.log(props.items);
  console.log(!!props.doneTodos.length);
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {!!props.items.length &&
          props.items
            .slice(0)
            .reverse()
            .map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                text={item.text}
                isDone={item.isDone}
                onUpdateTodo={props.onUpdateTodo}
                onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
                onCompleteTodo={props.onCompleteTodo.bind(null, item.id)}
              />
            ))}
      </ul>
      {!!props.doneTodos.length && (
        <div>
          <h3> 완료됨 </h3>
          <ul>
            {props.doneTodos
              .slice(0)
              .reverse()
              .map((item) => (
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  isDone={item.isDone}
                  onUpdateTodo={props.onUpdateTodo}
                  onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
                  onCompleteTodo={props.onCompleteTodo.bind(null, item.id)}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
