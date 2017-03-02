// @flow
import React from 'react';
import Tiles from './Tiles.react';
import PegsContainer from './PegsContainer.react';
import Group from './lib/Group.react';

import { BOARD_X, BOARD_Y } from '../constants';

const Board = () => {
  return (
    <Group x={BOARD_X} y={BOARD_Y}>
      <Tiles />
      <PegsContainer />
    </Group>
  );
};

export default Board;
