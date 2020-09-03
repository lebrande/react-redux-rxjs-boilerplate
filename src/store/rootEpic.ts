import { combineEpics } from 'redux-observable';

import * as todos from '@/modules/todos/epics';

export default combineEpics(
  ...Object.values(todos),
);
