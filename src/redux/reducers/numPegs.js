// @flow
import type { Action } from '../Store';

type State = number;

export default function numPegs(state: State = 0, action: Action): State {
  switch (action.type) {
    case 'WIPE_BOARD':
      return 0;
    case 'POPULATE':
      return action.pegs.length;
    case 'MOVE':
      return state - 1;
    default:
      return state;
  }
}
