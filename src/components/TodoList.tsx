import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; task: string; completed: boolean }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} />
      ))}
    </ul>
  );
};

export default TodoList;
