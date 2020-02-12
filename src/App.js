import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStylesheet from './components/GlobalStylesheet';
import Routes from './Routes';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStylesheet />
      <Routes />
    </Provider>
  );
}
