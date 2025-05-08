import React, { useRef, useState } from 'react';
import UserList from './Tododel';
import CreateUser from './Todoadd';

function App() {
  const [inputs, setInputs] = useState({
    todolist: '',
  });
  const { todolist } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      todolist: '5등분의 신부 시청',
      active : true
    },
    {
      id: 2,
      todolist: '강철의 연금술사 시청',
      active : false
    },
    {
      id: 3,
      todolist: '나루토 시청',
      active : false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      todolist,
    };
    setTodos(todos.concat(todo));

    setInputs({
      todolist: '',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, active: !todo.active } : todo
      )
    );
  };
  return (
    <>
      <CreateUser
        todolist={todolist}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
