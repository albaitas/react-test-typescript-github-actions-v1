import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

jest.mock('./TodoItem', () => (props: { task: string }) => <li data-testid='list-item'>{props.task}</li>);

describe('TodoList Component', () => {
  const todos = [
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Learn TypeScript', completed: true }
  ];

  test('renders a list of TodoItem components', () => {
    render(<TodoList todos={todos} />);

    expect(screen.getAllByTestId('list-item')).toHaveLength(todos.length);

    todos.forEach((todo) => {
      expect(screen.getByText(todo.task)).toBeInTheDocument();
    });
  });
});
