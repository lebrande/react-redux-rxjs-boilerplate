import { TestScheduler } from 'rxjs/testing';

// tslint:disable-next-line: no-import-side-effect
import 'jest-styled-components';

export const testScheduler = new TestScheduler((result, expected) => {
  expect(result).toEqual(expected);
});
