// @flow
export type Frame = {
  src: string,
  size: {w: number, h: number},
  pivot: {x: number, y: number},
};

type State = 'front' | 'lean' | 'jump' | 'duck' | 'hurt';

export type Sheet = {[key: State]: Frame};
