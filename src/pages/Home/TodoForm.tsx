import React, { useRef } from "react";
import classes from "./TodoForm.module.css";

const TodoForm: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);

    todoTextInputRef.current!.value = "";
  };

  return (
    <form
      className={classes.container}
      onBlur={submitHandler}
      onSubmit={submitHandler}
    >
      <input
        className={classes["input--add"]}
        placeholder="작업 추가"
        ref={todoTextInputRef}
      />
    </form>
  );
};

export default TodoForm;
