import React from 'react';

function TodoItem({todo, handleRemoveTodo, index}) {
  return (
  <li className='flex flex-row items-center justify-between text-lg w-[30vw]'>
    <span>{todo}</span>
    <button className='p-2 h-full min-w-32 rounded-md bg-red-300' onClick={() => handleRemoveTodo(index)}>Remove</button>
  </li>
  );
}
export default TodoItem;