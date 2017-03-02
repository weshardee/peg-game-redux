// @flow
import Store from './redux/Store';
import * as ActionCreators from './redux/ActionCreators';
import type { Coords } from './types';

export function onTouchTile(pos: Coords) {
  const state = Store.getState();
  if (state.phase === 'ready') {
    Store.dispatch(ActionCreators.populate(pos));
  } else if (state.excited) {
    Store.dispatch(ActionCreators.moveTo(pos));
  }
}

export function onTouchPeg(pos: Coords) {}
