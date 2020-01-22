import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { configureStore } from './store';
import { history } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}> 
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);


