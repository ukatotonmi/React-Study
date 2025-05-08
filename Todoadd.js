import React from 'react';

function Todoadd({ todolist, onChange, onCreate }) {
  return (
    <div>
      <input
        name="todolist"
        placeholder="할일을 쓰시오 ..."
        onChange={onChange}
        value={todolist}
      />
      <button onClick={onCreate}>할 일 추가</button>
    </div>
  );
}

export default Todoadd;
