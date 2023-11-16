import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';
import Todo from '../components/Todo';

test('renders task list', () => {
  const tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    // ...
  ];

  const { getByText } = render(<TaskList tasks={tasks} />);

  tasks.forEach((task) => {
    const taskElement = getByText(task.name);
    expect(taskElement).toBeInTheDocument();
  });

  // Use Todo component
  render(<Todo />);
});