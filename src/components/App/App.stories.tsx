import React from 'react';
import App from '@/components/App/App';

export default {
  component: App,
  title: 'App',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Default = () => {
  return (
    <App />
  );
};