// @flow

import React from 'react';
import Stage from './lib/Stage.react';
import Board from './Board.react';

import { GAME_STYLE } from '../constants';

const App = () => <Stage {...GAME_STYLE}><Board /></Stage>;

export default App;
