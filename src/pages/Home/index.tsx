import TitleHeader from "../../components/UI/TitleHeader";
import TodoList from "./TodoList";

import classes from "./index.module.css";

const Home = () => {
  const todos = ["바보", "애플"];
  return (
    <div className={classes.container}>
      <TitleHeader title="오늘 할 일" />
      <TodoList items={todos} />
    </div>
  );
};

export default Home;
