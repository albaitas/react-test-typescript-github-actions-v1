import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItem from './TodoItem';

describe('TodoItem Component', () => {
  test('renders the task prop', () => {
    const task = 'Test Todo Task';
    render(<TodoItem task={task} />);

    expect(screen.getByTestId('list')).toHaveTextContent(task);
  });
});
