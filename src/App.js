// src/App.js
import React, { useState } from 'react'; // Import useState
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true },
  ]);

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <TodoForm />
      <TodoList todos={todos} /> {/* Pass todos as a prop */}
    </div>
  );
}

export default App;