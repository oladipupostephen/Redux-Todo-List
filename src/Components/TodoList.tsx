import React from 'react';
import { Todo } from '../store/todosSlice';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos to show</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;