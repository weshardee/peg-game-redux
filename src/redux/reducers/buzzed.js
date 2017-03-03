// @flow
import type { Action } from '../ActionCreators';

export type BuzzedState = ?string;

export default function buzzed(
  state: BuzzedState = null,
  action: Action,
): BuzzedState {
  switch (action.type) {
    case 'BUZZ':
      return action.id;
    default:
      return null;
  }
}
