import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from '~/pages/Cart';
import Catalog from '~/pages/Catalog';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
