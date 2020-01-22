import React, { FunctionComponent } from 'react';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { notificationSelector, isNotificationOpenSelector } from './selectors';
import { TNotification } from './types';

type TProps = {};
type TInnerProps = {
  notification: TNotification;
  isOpen: boolean,
};

const Notification: FunctionComponent<TInnerProps> = ({
  notification,
  isOpen,
}) => {
  return isOpen 
    ? <p>{notification.message}</p>
    : null;
};

const mapStateToProps = createStructuredSelector({
  notification: notificationSelector,
  isOpen: isNotificationOpenSelector,
});

const enhance = compose<TInnerProps, TProps>(
  connect(
    mapStateToProps,
  ),
);

export default enhance(Notification);