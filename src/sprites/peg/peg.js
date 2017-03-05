// @flow
import beigeImg from './beige.png';
import blueImg from './blue.png';
import greenImg from './green.png';
import yellowImg from './yellow.png';
import pinkImg from './pink.png';

import jsonBeige from './beige.json';
import jsonBlue from './blue.json';
import jsonGreen from './green.json';
import jsonYellow from './yellow.json';
import jsonPink from './pink.json';

import type { Sheet, Frame } from '../types';

type FramesJSON = { [key: string]: Frame };

const beige: Sheet = {
  type: 'framed',
  img: beigeImg,
  frames: (jsonBeige: FramesJSON),
};
const green: Sheet = {
  type: 'framed',
  img: greenImg,
  frames: (jsonGreen: FramesJSON),
};
const yellow: Sheet = {
  type: 'framed',
  img: yellowImg,
  frames: (jsonYellow: FramesJSON),
};
const blue: Sheet = {
  type: 'framed',
  img: blueImg,
  frames: (jsonBlue: FramesJSON),
};
const pink: Sheet = {
  type: 'framed',
  img: pinkImg,
  frames: (jsonPink: FramesJSON),
};

const sprites = { beige, green, blue, yellow, pink };
export default sprites;
export type PegType = $Keys<typeof sprites>;
