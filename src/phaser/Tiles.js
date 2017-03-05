// @flow
import Phaser from 'phaser-ce';
import { TILE_PROPS } from '../constants';
import { boardToScreenPosition } from '../utils';
import type { Coords } from '../types';
import { onTouchTile } from '../interactions';

const SPRITESHEET_KEY = 'tiles';

const Tiles = {
  preload(game: Phaser.Game) {
    game.load.spritesheet(
      SPRITESHEET_KEY,
      TILE_PROPS.src,
      TILE_PROPS.width,
      TILE_PROPS.height,
      TILE_PROPS.length,
    );
  },

  getSprite(position: Coords, game: Phaser.Game): Phaser.Sprite {
    const { x, y } = boardToScreenPosition(position);
    const sprite = new Phaser.Sprite(game, x, y, SPRITESHEET_KEY, 0);
    sprite.pivot.x = TILE_PROPS.pivot.x;
    sprite.pivot.y = TILE_PROPS.pivot.y;
    sprite.inputEnabled = true;
    sprite.events.onInputUp.add(onTouchTile.bind(null, position));
    return sprite;
  },
};

export default Tiles;
