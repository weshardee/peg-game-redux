// @flow
import type { Action } from '../ActionCreators';

export type PhaseState = 'ready' | 'picking' | 'excited' | 'gameover';

export default function excited(
  state: PhaseState = 'ready',
  action: Action,
): PhaseState {
  switch (action.type) {
    case 'WIPE_BOARD':
      return 'ready';
    case 'POPULATE':
      return 'picking';
    case 'EXCITE':
      return 'excited';
    default:
      return state;
  }
}
