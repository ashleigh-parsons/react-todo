import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <h1 className='py-4 text-3xl text-bold'>TODO App</h1>
        <div className="flex flex-row gap-4 mb-8 text-lg w-[30vw] justify-between">
          <input
            type="text"
            placeholder="Add a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='p-2 rounded-md text-gray-800'
          />
          <button className='p-2 h-full min-w-32 rounded-md bg-green-300' onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="flex flex-col gap-2 max-h-[60vh] overflow-scroll">
          {todos.sort().map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} handleRemoveTodo={handleRemoveTodo} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;