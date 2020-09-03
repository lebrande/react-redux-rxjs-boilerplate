import { from } from 'rxjs';
import { Todo } from '@/modules/todos/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mockFetchTodosSuccess = (data: Todo[]) => () => from(new Promise<Todo[]>((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, 1000);
}));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mockFetchTodosFailure = (error?: string) => () => from(new Promise<Todo[]>((_resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 1000);
}));