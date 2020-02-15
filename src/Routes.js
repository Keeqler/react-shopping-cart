import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from './pages/Catalog/Catalog';
import Cart from './pages/Cart/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
