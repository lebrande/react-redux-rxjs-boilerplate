import React, { FunctionComponent } from 'react';

import Notification from '@components/Notification/Notification';

type TProps = {};

const App: FunctionComponent<TProps> = () => {
  return (
    <>
      <p>
        API_URL: {API_URL}
      </p>
      <Notification />
      <div>Hello Wolrld!</div>
    </>
  );
};

export default App;