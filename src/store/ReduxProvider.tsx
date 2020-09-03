import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from '@/store';

const ReduxProvider: FunctionComponent = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  );
};

export default ReduxProvider;