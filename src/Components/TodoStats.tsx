import React from 'react';
import './Todostats.css';

interface TodoStatsProps {
  activeTodoCount: number;
}

const TodoStats: React.FC<TodoStatsProps> = ({ activeTodoCount }) => {
  return (
    <span className="todo-stats">
      {activeTodoCount} {activeTodoCount === 1 ? 'item' : 'items'} left
    </span>
  );
};

export default TodoStats;