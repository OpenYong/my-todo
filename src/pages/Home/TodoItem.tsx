import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ item: string }> = (props) => {
  return (
    <li key={props.item} className={classes.item}>
      {props.item}
    </li>
  );
};

export default TodoItem;
