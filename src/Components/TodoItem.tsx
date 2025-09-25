import React from 'react';
import { useAppDispatch } from '../Hooks/redux';
import { Todo, toggleTodo, deleteTodo } from '../store/todosSlice';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className="todo-text">{todo.text}</span>
      <button 
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete todo"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;