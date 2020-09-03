import { createAsyncAction } from 'typesafe-actions';

import { Todo } from '@/modules/todos/types';

export const fetchTodosAsync = createAsyncAction(
  `todos/FETCH_TODOS`,
  `todos/FETCH_TODOS_SUCCESS`,
  `todos/FETCH_TODOS_FAILURE`,
  `todos/FETCH_TODOS_CANCEL`,
)<void, Todo[], Error, string>();