// @flow
import type { Action } from '../Store';
import type { Peg } from '../../types';

type State = { [key: string]: Peg };

export default function pegs(pegs: State = {}, action: Action): State {
  switch (action.type) {
    case 'POPULATE':
      const newPegs = {};
      action.pegs.forEach(peg => newPegs[peg.id] = peg);
      return newPegs;
    case 'WIPE_BOARD':
      return {};
    case 'MOVE':
      const nextPegs = { ...pegs };
      delete nextPegs[action.kill.id];
      nextPegs[action.id] = {
        ...nextPegs[action.id],
        pos: action.to,
      };
      return nextPegs;
    default:
      return pegs;
  }
}
