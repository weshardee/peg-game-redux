import duckSVG from './pink/duck.svg';
import frontSVG from './pink/front.svg';
import jumpSVG from './pink/jump.svg';
import leanSVG from './pink/lean.svg';
import hurtSVG from './pink/hurt.svg';

import type {Sheet} from './types';

const pink: Sheet = {
  duck: {
    src: duckSVG,
    size: {w: 69, h: 71},
    pivot: {x: 0.405797, y: 1},
  },
  front: {
    src: frontSVG,
    size: {w: 66, h: 92},
    pivot: {x: 0.484848, y: 1},
  },
  hurt: {
    src: hurtSVG,
    size: {w: 69, h: 92},
    pivot: {x: 0.652174, y: 1},
  },
  jump: {
    src: jumpSVG,
    size: {w: 67, h: 93},
    pivot: {x: 0.447761, y: 1},
  },
  lean: {
    src: leanSVG,
    size: {w: 66, h: 92},
    pivot: {x: 0.424242, y: 1},
  },
};

export default pink;
