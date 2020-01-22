import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router';

import { rootReducerCreator, RootState } from './rootReducer';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export const configureStore = (preloadedState?: RootState) => {
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      epicMiddleware,
    ),
  )

  const store = createStore(
    rootReducerCreator(history),
    preloadedState,
    composedEnhancers,
  );
  epicMiddleware.run(rootEpic);

  return store
};
