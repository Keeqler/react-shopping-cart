import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

export default createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : undefined,
);
