// @flow
import Store from './redux/Store';
import * as ActionCreators from './redux/ActionCreators';
import type {Coords} from './types';
import {hasValidMoves} from './utils';

export function onTouchTile(pos: Coords) {
  const {phase, excited} = Store.getState();
  Store.dispatch({type: 'TOUCH'});
  if (phase === 'ready') {
    Store.dispatch(ActionCreators.populate(pos));
  } else if (excited) {
    const action = ActionCreators.move(excited, pos);
    if (action) {
      Store.dispatch(action);
    }
  }
}

export function onTouchPeg(id: string) {
  const {board, pegs} = Store.getState();
  Store.dispatch({type: 'TOUCH'});
  if (hasValidMoves(board, pegs[id].pos)) {
    Store.dispatch(ActionCreators.excite(id));
  } else {
    Store.dispatch(ActionCreators.buzz(id));
  }
}

export function onTouchReset() {
  Store.dispatch(ActionCreators.wipe());
}
