import {
  TNotification,
  TSetNotificationAction,
  SET_NOTIFICATION,
  TCloseNotificationAction,
  CLOSE_NOTIFICATION,
 } from './types';

export const setNotification = (notification: TNotification): TSetNotificationAction => ({
  type: SET_NOTIFICATION,
  payload: {
    notification,
  },
});

export const closeNotification = (): TCloseNotificationAction => ({
  type: CLOSE_NOTIFICATION,
});