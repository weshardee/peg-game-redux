// @flow

import React from 'react';
import Stage from './lib/Stage.react';
import Tiles from './Tiles.react';
import PegsContainer from './PegsContainer.react';
import Group from './lib/Group.react';
import ResetBtn from './ResetBtn.react';
import StatusMsg from './StatusMsg.react';

import { BOARD_X, BOARD_Y, GAME_STYLE } from '../constants';

const App = () => (
  <Stage {...GAME_STYLE}>
    <Group x={BOARD_X} y={BOARD_Y}>
      <Tiles />
      <PegsContainer />
    </Group>
    <ResetBtn x={25} y={25} />
    <Group y={14} x={GAME_STYLE.width - 20}>
      <StatusMsg />
    </Group>
  </Stage>
);

export default App;
