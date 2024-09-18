import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (newTodo: { id: number; task: string; completed: boolean }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTodo({
      id: Date.now(),
      task: task.trim(),
      completed: false,
    });

    setTask("");
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        type="text"
        id="task"
        placeholder="New Todo"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button data-testid="button">Add</button>
    </form>
  );
};

export default TodoForm;
