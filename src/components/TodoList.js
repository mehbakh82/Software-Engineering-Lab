// src/components/TodoList.js
import React from 'react';

function TodoList({ todos }) { // Destructure todos from props
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;