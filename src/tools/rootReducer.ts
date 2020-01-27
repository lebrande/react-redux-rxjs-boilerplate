import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { TNotificationState } from '@components/Notification/types';
import { notificationReducer } from '@components/Notification/reducer';

export const rootReducerCreator = (history: History) => combineReducers({
  router: connectRouter(history),
  notification: notificationReducer,
})

export type RootState = {
  router: RouterState;
  notification: TNotificationState,
};