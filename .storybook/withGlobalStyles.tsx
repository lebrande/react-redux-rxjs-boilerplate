import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { DecoratorFunction } from '@storybook/addons';

import { GlobalStyle } from '@/styled/global';

const StorybookStyled = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const withGlobalStyles: DecoratorFunction<JSX.Element> = (story) => (
  <>
    <GlobalStyle />
    <StorybookStyled />
    {story()}
  </>
);