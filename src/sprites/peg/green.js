import duckSVG from './green/duck.svg';
import frontSVG from './green/front.svg';
import jumpSVG from './green/jump.svg';
import leanSVG from './green/lean.svg';
import hurtSVG from './green/hurt.svg';

import type {Sheet} from './types';

const green: Sheet = {
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
    pivot: {x: 0.666667, y: 1},
  },
  jump: {
    src: jumpSVG,
    size: {w: 67, h: 93},
    pivot: {x: 0.432836, y: 1},
  },
  lean: {
    src: leanSVG,
    size: {w: 66, h: 92},
    pivot: {x: 0.409091, y: 1},
  },
};

export default green;
