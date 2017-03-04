// @flow

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
