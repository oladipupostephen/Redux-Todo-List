import React from 'react';
import { useAppSelector } from '../Hooks/redux';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import './TodoApp.css';

const TodoApp: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.items);
  const currentFilter = useAppSelector((state) => state.filters.status);

  const filteredTodos = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app">
      <Header />
      <TodoInput />
      <TodoList todos={filteredTodos} />
      <TodoFooter activeTodoCount={activeTodoCount} />
    </div>
  );
};

export default TodoApp;