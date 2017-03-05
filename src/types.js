// @flow

import type { PegType } from './sprites/peg/peg';
export type { PegType };

export type EntityID = string;
export type Coords = { x: number, y: number };

export type Peg = {
  id: string,
  pos: Coords,
  type: PegType /* indicates which sprite gets used */,
};

export type SimpleSpritesheet = {
  uri: string,
  width: number,
  height: number,
};
