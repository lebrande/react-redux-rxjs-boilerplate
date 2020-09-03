import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import todos from '@/modules/todos/reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (history: History<null>) =>
  combineReducers({
    router: connectRouter(history),
    todos,
  });

export default rootReducer;
