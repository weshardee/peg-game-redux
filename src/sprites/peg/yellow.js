// @flow
import duckSVG from './yellow/duck.svg';
import frontSVG from './yellow/front.svg';
import jumpSVG from './yellow/jump.svg';
import leanSVG from './yellow/lean.svg';
import hurtSVG from './yellow/hurt.svg';

import type {Sheet} from './types';

const yellow: Sheet = {
  duck: {
    src: duckSVG,
    size: {w: 68, h: 67},
    pivot: {x: 0.397059, y: 1},
  },
  front: {
    src: frontSVG,
    size: {w: 66, h: 82},
    pivot: {x: 0.484848, y: 1},
  },
  hurt: {
    src: hurtSVG,
    size: {w: 69, h: 81},
    pivot: {x: 0.623188, y: 1},
  },
  jump: {
    src: jumpSVG,
    size: {w: 67, h: 83},
    pivot: {x: 0.447761, y: 1},
  },
  lean: {
    src: leanSVG,
    size: {w: 66, h: 82},
    pivot: {x: 0.424242, y: 1},
  },
};

export default yellow;
