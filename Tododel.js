import React from 'react';

function User({ todo, onchange, onRemove, onToggle }) {
  return (
    <div>
      <b
      style={{
        cursor: 'pointer',
        color: todo.active ? 'blue' : 'black'
      }}
      onClick={() => onToggle(todo.id)}
      >{todo.todolist}</b>
      <button onClick={() => onToggle(todo.id)}>완료</button>
      <button onClick={() => onRemove(todo.id)}>❌</button>
    </div>
  );
}

function Tododel({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.map(todo => (
        <User todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default Tododel;
