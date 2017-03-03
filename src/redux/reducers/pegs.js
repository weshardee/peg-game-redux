// @flow
import type { Action } from '../ActionCreators';
import type { Peg } from '../../types';

export type PegsState = { [key: string]: Peg };

export default function pegs(pegs: PegsState = {}, action: Action): PegsState {
  switch (action.type) {
    case 'POPULATE':
      const newPegs = {};
      action.pegs.forEach(peg => newPegs[peg.id] = peg);
      return newPegs;
    case 'WIPE_BOARD':
      return {};
    case 'MOVE':
      const nextPegs: PegsState = { ...pegs };
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
