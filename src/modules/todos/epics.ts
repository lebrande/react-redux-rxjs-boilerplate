import { of } from 'rxjs';
import {
  map,
  switchMap,
  filter,
  catchError,
  takeUntil,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fetchTodosAsync } from '@/modules/todos/actions';
import { RootEpic } from '@/store/types';

export const fetchTodosEpic: RootEpic = (
  action$,
  _state$,
  { todos },
) =>
  action$.pipe(
    filter(isActionOf(fetchTodosAsync.request)),
    switchMap(() =>
      todos.fetchTodos().pipe(
        map(fetchTodosAsync.success),
        catchError((erorr) => of(fetchTodosAsync.failure(erorr))),
        takeUntil(action$.pipe(filter(isActionOf(fetchTodosAsync.cancel)))),
      )
    ),
  );