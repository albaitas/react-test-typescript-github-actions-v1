import React from "react";

interface TodoItemProps {
  task: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return <li data-testid="list">{task}</li>;
};

export default TodoItem;
