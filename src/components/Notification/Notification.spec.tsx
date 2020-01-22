import React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Notification from './Notification';

describe('Notification component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    notification: {
      notification: {
        message: 'test message',
        variant: 'success',
      },
      isOpen: true,
    },
  });

  it('matches to snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Notification />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});