import { fetchTodosAsync } from '@/modules/todos/actions';
import { fetchTodosEpic } from '@/modules/todos/epics';
import { Services } from '@/services/types';
import { testScheduler } from '@/setupTests';

describe('Todos epic', () => {
  it('handle fetching todos successfully', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: fetchTodosAsync.request(),
      });
      const state$ = null;
      const dependencies: Partial<Services> = {
        todos: {
          fetchTodos: () => cold('--a', {
            a: [],
          }),
        },
      };

      // @ts-ignore
      const output$ = fetchTodosEpic(action$, state$, dependencies);

      expectObservable(output$).toBe('---a', {
        a: {
          ...fetchTodosAsync.success([]),
          meta: 0,
        },
      });
    });
  });
});