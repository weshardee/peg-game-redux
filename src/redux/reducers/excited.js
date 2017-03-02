// @flow
import type { Action } from '../Store';

type State = ?string;

export default function excited(state: State = null, action: Action): State {
  switch (action.type) {
    case 'WIPE_BOARD':
      return null;
    case 'POPULATE':
      return null;
    case 'KILL_PEG':
      return null;
    case 'MOVE':
      return null;
    case 'BUZZ':
      return null;
    case 'EXCITE':
      return action.id;
    default:
      return state;
  }
}
