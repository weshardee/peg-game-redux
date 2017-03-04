// @flow
import { Motion, spring } from 'react-motion';
import React from 'react';
import Sprite from './lib/Sprite.react';
import { boardToScreenPosition } from '../utils';
import { TILE_PROPS } from '../constants';
import { onTouchTile } from '../interactions';

type Props = {
  x: number,
  y: number,
};

type AnimatedProps = {
  y: number,
};

const Tile = (props: Props) => {
  const screenPos = boardToScreenPosition(props);
  return (
    <Motion
      defaultStyle={{ y: screenPos.y + 600 }}
      style={{ y: spring(screenPos.y) }}
      children={({ y }: AnimatedProps) => (
        <Sprite
          {...TILE_PROPS}
          x={screenPos.x}
          y={y}
          onClick={() => onTouchTile(props)}
        />
      )}
    />
  );
};

export default Tile;
