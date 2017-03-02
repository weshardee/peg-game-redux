// @flow
import React from 'react';
import Sprite from './lib/Sprite.react';
import { PEG_PROPS } from '../constants';
import { boardToScreenPosition } from '../utils';
import type { Peg as Props } from '../types';
import { onTouchPeg } from '../interactions';

const Peg = (props: Props) => (
  <Sprite
    {...{ ...PEG_PROPS, ...boardToScreenPosition(props.pos) }}
    frame={props.type}
    onClick={() => onTouchPeg(props.id)}
  />
);

export default Peg;
