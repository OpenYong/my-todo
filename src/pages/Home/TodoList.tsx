import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

import classes from "./TodoList.module.css";
import Todo from "../../models/todo";

const TodoList: React.FC<{
  items: Todo[];
  onUpdateTodo: (id: string, text: string) => void;
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}> = (props) => {
  const { items } = props;

  const ongoingTodos = useMemo(() => {
    return props.items.filter((item) => item.isDone === false);
  }, [items]);

  const doneTodos = useMemo(() => {
    return props.items.filter((item) => item.isDone === true);
  }, [items]);

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {!!props.items.length &&
          ongoingTodos
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
      {!!doneTodos.length && (
        <div>
          <h3 className={classes["header-done"]}>완료됨</h3>
          <ul>
            {doneTodos
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

export default React.memo(TodoList);
