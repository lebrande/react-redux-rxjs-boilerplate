import { createReducer } from 'typesafe-actions';

import * as todosActions from '@/modules/todos/actions';
import { TodosState } from '@/modules/todos/types';

const initialState: TodosState = {
  todos: [],
};

export default createReducer<TodosState>(initialState)
  .handleAction(
    [todosActions.fetchTodosAsync.success],
    (state, { payload }) => ({
      ...state,
      todos: payload,
    }),
  );