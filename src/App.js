import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import store from './store';

import GlobalStylesheet from './components/GlobalStylesheet';
import Header from './components/Header/Header';
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
