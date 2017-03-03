import type { BoardState } from './reducers/board';
import type { BuzzedState } from './reducers/buzzed';
import type { ExcitedState } from './reducers/excited';
import type { PegsState } from './reducers/pegs';

export type State = {
  board: BoardState,
  buzzed: BuzzedState,
  excited: ExcitedState,
  pegs: PegsState,
};
