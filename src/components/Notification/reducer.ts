import {
  TNotificationState,
  TNotificationActionTypes,
  SET_NOTIFICATION,
  CLOSE_NOTIFICATION,
} from './types';

const initialState: TNotificationState = {
  notification: null,
  isOpen: false,
}

export const notificationReducer = (
  state = initialState,
  action: TNotificationActionTypes,
): TNotificationState => {
  switch (action.type) {
    case SET_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload.notification,
        isOpen: true,
      }
    }
    case CLOSE_NOTIFICATION: {
      return {
        ...state,
        isOpen: false,
      }
    }
    default:
      return state
  }
}