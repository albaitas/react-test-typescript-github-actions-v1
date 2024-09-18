import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from './TodoForm';

describe('TodoForm Component', () => {
  test('renders the form with an input and a button', () => {
    render(<TodoForm addTodo={() => {}} />);

    expect(screen.getByLabelText(/New Todo/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<TodoForm addTodo={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Task' } });

    expect(input).toHaveValue('New Task');
  });

  test('calls addTodo with correct arguments when form is submitted', () => {
    const mockAddTodo = jest.fn();
    render(<TodoForm addTodo={mockAddTodo} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Task' } });

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledWith(
      expect.objectContaining({
        task: 'New Task',
        completed: false
      })
    );
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
  });

  test('clears input after form submission', () => {
    render(<TodoForm addTodo={() => {}} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Task' } });

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });

  test('does not call addTodo if input is empty', () => {
    const mockAddTodo = jest.fn();
    render(<TodoForm addTodo={mockAddTodo} />);

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
