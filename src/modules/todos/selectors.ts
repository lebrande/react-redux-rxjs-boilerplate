import { createSelector } from 'reselect';

import { RootState } from '@/store/types';

const todosStateSelector = (state: RootState) => state.todos;

export const todosSelector = createSelector(
  todosStateSelector,
  ({ todos }) => todos,
);