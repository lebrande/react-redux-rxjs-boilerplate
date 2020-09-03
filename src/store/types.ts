import { StateType, ActionType } from 'typesafe-actions';
import { Epic } from 'redux-observable';
import { Services } from '@/services/types';

export type Store = StateType<typeof import('@/store').default>;
export type RootState = StateType<
  ReturnType<typeof import('@/store/rootReducer').default>
>;
export type RootAction = ActionType<typeof import('@/store/rootAction').default>;

export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;