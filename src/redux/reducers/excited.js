// @flow
import type { Action } from '../ActionCreators';

export type ExcitedState = ?string;

export default function excited(
  state: ExcitedState = null,
  action: Action,
): ExcitedState {
  switch (action.type) {
    case 'EXCITE':
      return action.id;
    default:
      return null;
  }
}
