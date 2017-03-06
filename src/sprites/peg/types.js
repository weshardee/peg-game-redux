// @flow
export type Frame = {
  src: string,
  size: {w: number, h: number},
  pivot: {x: number, y: number},
};

export type PegState = 'front' | 'lean' | 'jump' | 'duck' | 'hurt';

export type Sheet = {[key: PegState]: Frame};
