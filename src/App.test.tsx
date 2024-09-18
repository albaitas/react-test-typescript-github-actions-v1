import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders TodoList and TodoForm', () => {
    render(<App />);

    expect(screen.getByText('TodoList')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<App />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});
