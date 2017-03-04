// @flow
import { createStore } from 'redux';
import { reducers } from './State';

import type { State } from './State';
import type { Store } from 'redux';
import type { Action } from './ActionCreators';

const store: Store<State, Action> = createStore(reducers);

export default store;
