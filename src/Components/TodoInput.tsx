import React, { useState } from 'react';
import { useAppDispatch } from '../Hooks/redux';
import { addTodo } from '../store/todosSlice';
import './TodoInput.css';

const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;