// @flow
export type Frame = {
  frame: { x: number, y: number, w: number, h: number },
  rotated: boolean,
  trimmed: boolean,
  spriteSourceSize: { x: number, y: number, w: number, h: number },
  sourceSize: { w: number, h: number },
  pivot: { x: number, y: number },
};

export type Sheet = {
  img: string,
  frames: { [key: string]: Frame },
};
