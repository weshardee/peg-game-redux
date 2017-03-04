// @flow
import { createStore } from 'redux';
import reducers from './reducers';

import type { State } from '../types';
import type { Store } from 'redux';
import type { Action } from './ActionCreators';

const store: Store<State, Action> = createStore(reducers);

export default store;
