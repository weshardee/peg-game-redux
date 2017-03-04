// @flow

// stage
export const GAME_SIZE = 500;
export const GAME_STYLE = {
  width: GAME_SIZE,
  height: GAME_SIZE,
  backgroundColor: '#333333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};
export const BOARD_X = GAME_SIZE / 2;
export const BOARD_Y = 160;

// grid
export const BOARD_SIZE = 5;
export const Y_HEX_FACTOR = 0.8;
export const BOARD_GRID_SIZE = 65;
export const BOARD_ROW_HEIGHT = BOARD_GRID_SIZE * Y_HEX_FACTOR;

// audio
export const AUDIO_ERROR_ID = 'error';
export const AUDIO_ERROR_URI = 'assets/sounds/error.mp3';
export const AUDIO_JUMP_URI = 'assets/sounds/jump.mp3';

// UI images
export const RESET_URI = '/assets/images/return.png';

// pegs
export const PEG_PROPS = {
  anchor: { x: 0.5, y: 0.8 },
  sheet: {
    uri: '/assets/images/pegs.png',
    width: 40,
    height: 66,
    length: 5,
  },
};

// tiles
export const TILE_PROPS = {
  anchor: { x: 0.5, y: 0.375 },
  sheet: {
    uri: '/assets/images/tiles.png',
    width: BOARD_GRID_SIZE,
    height: 89,
    length: 4,
  },
  frame: 0,
};

// death animation
export const DEATH_DURATION = 200;
export const DEATH_ALPHA = 0;
export const DEATH_SCALE = Object.freeze({
  x: 0,
  y: 0,
});
