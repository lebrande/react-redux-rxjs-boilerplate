import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '@/modules/todos/selectors';
import { fetchTodosAsync } from '@/modules/todos/actions';

const App: FunctionComponent = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync.request());
  });

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(({ name, done }) => {
          return (
            <li key={name}>{name} {done ? '✅' : '❌'}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;