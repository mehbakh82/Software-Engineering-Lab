// src/components/TodoForm.js
import React from 'react';

function TodoForm() {
  return (
    <form>
      <input type="text" placeholder="Add a new to-do..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;