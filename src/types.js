// @flow

import type { BoardState } from './redux/reducers/board';
import type { BuzzedState } from './redux/reducers/buzzed';
import type { ExcitedState } from './redux/reducers/excited';
import type { PegsState } from './redux/reducers/pegs';

export type State = {
  board: BoardState,
  buzzed: BuzzedState,
  excited: ExcitedState,
  pegs: PegsState,
};

export type EntityID = string;
export type Coords = { x: number, y: number };

export type PegType = 0 | 1 | 2 | 3 | 4;
export type Peg = {
  id: string,
  pos: Coords,
  type: PegType /* indicates which sprite gets used */,
};

export type Spritesheet = {
  uri: string,
  width: number,
  height: number,
};
