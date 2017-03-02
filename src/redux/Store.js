import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';

import type Board from '../Board';
import type Action from './Action';

type State = {
  message: ?string,
  board: Board,
};

type Store = {
  getState: () => State,
  dispatch: (action: Action) => void,
};

const createStoreWithMiddleware = applyMiddleware(
  createLogger(), // must be last
)(createStore);

export default (createStoreWithMiddleware(reducers): Store);
