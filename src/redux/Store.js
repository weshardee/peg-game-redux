// @flow
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';

import type { Store } from 'redux';
import type { Action } from './ActionCreators';

// const createStoreWithMiddleware = applyMiddleware(
//   createLogger(), // must be last
// )(createStore);

const store: Store<Object, Action> = createStore(reducers);

export default store;
