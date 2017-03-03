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
      TILE_PROPS.sheet.uri,
      TILE_PROPS.sheet.width,
      TILE_PROPS.sheet.height,
      TILE_PROPS.sheet.length,
    );
  },

  getSprite(position: Coords, game: Phaser.Game): Phaser.Sprite {
    const { x, y } = boardToScreenPosition(position);
    const sprite = new Phaser.Sprite(game, x, y, SPRITESHEET_KEY, 0);
    sprite.anchor.x = TILE_PROPS.anchor.x;
    sprite.anchor.y = TILE_PROPS.anchor.y;
    sprite.inputEnabled = true;
    sprite.events.onInputUp.add(onTouchTile.bind(null, position));
    return sprite;
  },
};

export default Tiles;
