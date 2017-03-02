// @flow
import type { Action } from '../Store';

export default function message(message: ?string, action: Action): ?string {
  switch (action.type) {
    case 'WIPE_BOARD':
      return null;
    default:
      return message;
  }
}
