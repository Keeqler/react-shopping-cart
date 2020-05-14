import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from '~/services/history';

import GlobalStylesheet from '~/components/GlobalStylesheet';
import Header from '~/components/Header';

import store from '~/store';

import Routes from './Routes';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStylesheet />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
