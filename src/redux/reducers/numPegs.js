// @flow
import type { Action } from '../ActionCreators';

export type NumPegsState = number;

export default function numPegs(
  state: NumPegsState = 0,
  action: Action,
): NumPegsState {
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
