import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from '@/components/App/App';
import ReduxProvider from '@/store/ReduxProvider';
import { GlobalStyle } from '@/styled/global';
import { appRootElementId } from '@/constants';
import { jsdzemTheme } from '@/themes/jsdzem';

ReactDOM.render(
  <ReduxProvider>
    <ThemeProvider theme={jsdzemTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById(appRootElementId),
);
