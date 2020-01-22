const storeKey = 'notification';

export type TNotification = {
  message: string;
  variant: 'success' | 'warining' | 'error';
};

export type TNotificationState = {
  notification: TNotification;
  isOpen: boolean;
};

export const SET_NOTIFICATION = `${storeKey}/SET_NOTIFICATION`;
export const CLOSE_NOTIFICATION = `${storeKey}/CLOSE_NOTIFICATION`;

export type TSetNotificationAction = {
  type: typeof SET_NOTIFICATION;
  payload: {
    notification: TNotification;
  };
}

export type TCloseNotificationAction = {
  type: typeof CLOSE_NOTIFICATION;
}

export type TNotificationActionTypes = TSetNotificationAction & TCloseNotificationAction;