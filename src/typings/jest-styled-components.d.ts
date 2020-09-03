/**
|--------------------------------------------------
| Trick for resolving problem with missing `toHaveStyleRule` property in tests
| issue topic: https://github.com/styled-components/jest-styled-components/issues/291
|--------------------------------------------------
*/
declare namespace jest {
  interface AsymmetricMatcher {
    $$typeof: symbol;
    sample?: string | RegExp | Array<any>;
  }

  type Value = string | number | RegExp | AsymmetricMatcher | undefined;

  interface Options {
    media?: string;
    modifier?: string;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
  }
}
