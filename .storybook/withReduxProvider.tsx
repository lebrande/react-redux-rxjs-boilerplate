import React from 'react';
import { DecoratorFunction } from '@storybook/addons';

import ReduxProvider from '@/store/ReduxProvider';

export const withReduxProvider: DecoratorFunction<JSX.Element> = (story) => (
  <ReduxProvider>
    {story()}
  </ReduxProvider>
)