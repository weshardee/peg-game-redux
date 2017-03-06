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

import type { Frame } from '../types';

type PegFrame = 'front' | 'duck' | 'jump' | 'lean';
type FrameDefs = { [key: PegFrame]: Frame };
type JSON = {
  frames: FrameDefs,
};
type PegSheet = { img: string, frames: FrameDefs };

const beige: PegSheet = {
  img: beigeImg,
  frames: (jsonBeige: JSON).frames,
};
const green: PegSheet = {
  img: greenImg,
  frames: (jsonGreen: JSON).frames,
};
const yellow: PegSheet = {
  img: yellowImg,
  frames: (jsonYellow: JSON).frames,
};
const blue: PegSheet = {
  img: blueImg,
  frames: (jsonBlue: JSON).frames,
};
const pink: PegSheet = {
  img: pinkImg,
  frames: (jsonPink: JSON).frames,
};

const sprites = { beige, green, blue, yellow, pink };
export default sprites;
export type PegType = $Keys<typeof sprites>;
