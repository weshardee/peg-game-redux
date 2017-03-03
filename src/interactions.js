// @flow
import Store from './redux/Store';
import * as ActionCreators from './redux/ActionCreators';
import type { Coords } from './types';
import { hasValidMoves } from './utils';

export function onTouchTile(pos: Coords) {
  const state = Store.getState();
  if (state.phase === 'ready') {
    Store.dispatch(ActionCreators.populate(pos));
  } else if (state.excited) {
    const action = ActionCreators.moveTo(pos);
    if (action) {
      Store.dispatch(action);
    }
  }
}

export function onTouchPeg(id: string) {
  const { board, pegs } = Store.getState();
  if (hasValidMoves(board, pegs[id].pos)) {
    Store.dispatch(ActionCreators.excite(id));
  } else {
    Store.dispatch(ActionCreators.buzz(id));
  }
}
