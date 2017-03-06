// @flow
import { Motion, spring } from 'react-motion';
import React from 'react';
import Image from './lib/Image.react';
import { boardToScreenPosition } from '../utils';
import { onTouchTile } from '../interactions';
import tileSVG from './images/tile.svg';
import {BOARD_GRID_SIZE} from '../constants';

type Props = {
  x: number,
  y: number,
};

type AnimatedProps = {
  y: number,
};

const TILE_HEIGHT = 89;
const TILE_WIDTH = 65;
const TILE_SCALE = BOARD_GRID_SIZE / TILE_WIDTH;

const Tile = (props: Props) => {
  const screenPos = boardToScreenPosition(props);
  return (
    <Motion
      defaultStyle={{ y: screenPos.y + 600 }}
      style={{ y: spring(screenPos.y) }}
      children={({ y }: AnimatedProps) => (
        <Image
          src={tileSVG}
          pivot={{ x: 0.5, y: 0.375 }}
          width={TILE_WIDTH}
          height={TILE_HEIGHT}
          x={screenPos.x}
          y={y}
          scale={TILE_SCALE}
          onClick={() => onTouchTile(props)}
        />
      )}
    />
  );
};

export default Tile;
