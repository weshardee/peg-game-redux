// @flow

import Phaser from './Phaser';

import GameState from './GameState';

import { GAME_STYLE } from '../constants';

const game = new Phaser.Game(
  GAME_STYLE.width,
  GAME_STYLE.height,
  Phaser.AUTO,
  'peg-game',
);
game.state.add('GameState', GameState, false);

export default game;
