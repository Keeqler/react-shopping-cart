import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Catalog} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}
