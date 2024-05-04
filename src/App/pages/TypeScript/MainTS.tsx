// import TodoItem from '@/App/pages/TypeScript/TodoItem';
import React, { useEffect, useState } from 'react';
import NewTodoForm from '@/App/pages/TypeScript/NewTodoForm';

import { Todo } from '@/App/pages/TypeScript/types';
import TodoList from '@/App/pages/TypeScript/TodoList';

const MainTS = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toDateString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText('');
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      {/* <TodoItem id={'123'}
      completed={true}
      title={'firsttodo'}
      style={{border: '1px solid orange'}}/>*/}

      <TodoList list={todos} />
    </>
  );
};

export default MainTS;
