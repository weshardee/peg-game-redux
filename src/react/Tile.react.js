// @flow

import React from 'react';
import Sprite from './lib/Sprite.react';
import { boardToScreenPosition } from '../utils';
import { TILE_PROPS } from '../constants';

type Props = {
  x: number,
  y: number,
};

const Tile = (props: Props) => (
  <Sprite {...{ ...TILE_PROPS, ...boardToScreenPosition(props) }} />
);

export default Tile;
