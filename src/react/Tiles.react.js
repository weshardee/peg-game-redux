// @flow
import React from 'react';
import Tile from './Tile.react';
import Group from './lib/Group.react';

import { BOARD_SIZE } from '../constants';

const Tiles = () => {
  const tiles = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x <= y; x++) {
      tiles.push(<Tile key={`${x}${y}`} x={x} y={y} />);
    }
  }
  return (
    <Group x={0} y={0}>
      {tiles}
    </Group>
  );
};

export default Tiles;
