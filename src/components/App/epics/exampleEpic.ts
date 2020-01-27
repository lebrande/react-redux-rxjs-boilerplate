import { Observable } from 'rxjs';
import { AnyAction } from 'redux';
import { ofType, Epic } from 'redux-observable';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { map } from 'rxjs/operators';

import { setNotification } from '@components/Notification/actions';

export const exampleEpic: Epic = (
  actions$: Observable<AnyAction>,
) => actions$.pipe(
  ofType(LOCATION_CHANGE),
  map(({ payload: { location }}: LocationChangeAction) => setNotification({
    message: `Route changed: ${location.pathname}`,
    variant: 'success',
  })),
);