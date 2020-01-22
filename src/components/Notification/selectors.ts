import { createSelector } from 'reselect';

import { RootState } from '../../rootReducer';
import { TNotificationState, TNotification } from './types';

const notificationStateSelector = (state: RootState): TNotificationState => state.notification;

export const notificationSelector = createSelector<
  RootState,
  TNotificationState,
  TNotification
>(
  notificationStateSelector,
  ({ notification }) => notification,
);

export const isNotificationOpenSelector = createSelector<
  RootState,
  TNotificationState,
  boolean
>(
  notificationStateSelector,
  ({ isOpen }) => isOpen,
);