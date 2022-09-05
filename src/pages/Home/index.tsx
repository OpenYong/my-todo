import TodoList from "./TodoList";

const Home = () => {
  const todos = ["바보", "애플"];
  return (
    <div>
      <TodoList items={todos} />
    </div>
  );
};

export default Home;
