// @flow
import { createStore } from 'redux';
import reducers from './reducers';

import type { Store } from 'redux';
import type { Action } from './ActionCreators';

const store: Store<Object, Action> = createStore(reducers);

export default store;
