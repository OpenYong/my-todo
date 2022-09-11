class Todo {
  id: string;
  text: string;
  isDone: boolean;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
    this.isDone = false;
  }
}

export default Todo;
