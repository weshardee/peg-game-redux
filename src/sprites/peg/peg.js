// @flow
import beige from './beige';
import blue from './blue';
import green from './green';
import pink from './pink';
import yellow from './yellow';

import preload from '../../preload';

export type Frame = {
  src: string,
  size: {w: number, h: number},
  pivot: {x: number, y: number},
};

export type PegState = 'front' | 'lean' | 'jump' | 'duck' | 'hurt';

export type Sheet = {[key: PegState]: Frame};

const sprites = {beige, yellow, blue, pink, green};

export type PegType = $Keys<typeof sprites>;
export type StateSheet = {[key: PegType]: Sheet};
export default sprites;

// preload sources
for (let color in sprites) {
  if (sprites.hasOwnProperty(color)) {
    for (let state in sprites[color]) {
      if (sprites[color].hasOwnProperty(state)) {
        const {src} = sprites[color][state];
        preload(src);
      }
    }
  }
}
