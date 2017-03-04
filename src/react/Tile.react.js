// @flow

import React from 'react';
import Sprite from './lib/Sprite.react';
import { boardToScreenPosition } from '../utils';
import { TILE_PROPS } from '../constants';
import { onTouchTile } from '../interactions';

type Props = {
  x: number,
  y: number,
};

const Tile = (props: Props) => (
  <Sprite
    {...{ ...TILE_PROPS, ...boardToScreenPosition(props) }}
    onClick={() => onTouchTile(props)}
  />
);

export default Tile;
