import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';

import { Services } from '@/services/types';
import { RootState, RootAction } from '@/store/types';
import services from '@/services';
import rootReducer from '@/store/rootReducer';
import rootEpic from '@/store/rootEpic';
import { composeEnhancers } from '@/store/utils';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

export const history = createBrowserHistory<null>();

const middlewares = [routerMiddleware(history), epicMiddleware];
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

const preloadedState = {};
const store = createStore(rootReducer(history), preloadedState, composedEnhancers);
epicMiddleware.run(rootEpic);

export default store;
