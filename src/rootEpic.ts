import { combineEpics } from 'redux-observable';

import { exampleEpic } from './components/App/epics/exampleEpic';

export const rootEpic = combineEpics(
  exampleEpic,
);
