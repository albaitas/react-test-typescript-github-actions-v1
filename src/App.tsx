import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 12, task: "React", completed: false },
    { id: 13, task: "Angular", completed: true },
  ]);

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="container">
      <h3>TodoList</h3>
      <TodoList todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
