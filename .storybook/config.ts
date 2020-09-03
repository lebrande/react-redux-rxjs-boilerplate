import { addDecorator, configure, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withReduxProvider } from '@sb/withReduxProvider';
import { withGlobalStyles } from '@sb/withGlobalStyles';
import { jsdzemTheme } from '@/themes/jsdzem';

addParameters({
  backgrounds: [
    { name: 'black', value: '#000' },
    { name: 'dark', value: '#444', default: true },
    { name: 'light', value: '#f6e6c6' },
    { name: 'white', value: '#FFF' },
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  info: {},
});

addDecorator(withReduxProvider);
addDecorator(withGlobalStyles);
addDecorator(withThemesProvider([
  jsdzemTheme,
]));

const req = require.context('@/components', true, /\.stories\.tsx?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);