// @flow
import type { Action } from '../ActionCreators';

type State = 'ready' | 'picking' | 'excited' | 'gameover';

export default function excited(state: State = 'ready', action: Action): State {
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
