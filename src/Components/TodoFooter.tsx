import React from 'react';
import TodoStats from './TodoStats';
import TodoFilters from './TodoFilters';
import './TodoFooter.css';

interface TodoFooterProps {
  activeTodoCount: number;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ activeTodoCount }) => {
  return (
    <footer className="todo-footer">
      <TodoStats activeTodoCount={activeTodoCount} />
      <TodoFilters />
    </footer>
  );
};

export default TodoFooter;