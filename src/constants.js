// @flow

// grid
export const BOARD_SIZE = 5;
export const Y_HEX_FACTOR = 0.8;
export const BOARD_GRID_SIZE = 92;
export const BOARD_ROW_HEIGHT = BOARD_GRID_SIZE * Y_HEX_FACTOR;

// audio
export const AUDIO_ERROR_ID = 'error';
export const AUDIO_ERROR_URI = 'assets/sounds/error.mp3';
export const AUDIO_JUMP_URI = 'assets/sounds/jump.mp3';

// UI images
export const RESET_URI = '/assets/images/return.png';

// pegs
export const PEG_PROPS = {
  pivot: {x: 0.5, y: 0.8},
  sheet: {
    uri: '/assets/images/pegs.png',
    width: 40,
    height: 66,
    length: 5,
  },
};

// death animation
export const DEATH_DURATION = 200;
export const DEATH_ALPHA = 0;
export const DEATH_SCALE = Object.freeze({
  x: 0,
  y: 0,
});
