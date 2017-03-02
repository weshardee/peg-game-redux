// @flow
import type Phaser from './Phaser';
import type { PegType } from '../types';
import { PEG_PROPS } from '../constants';
import { boardToScreenPosition } from '../utils';
import type { Coords } from '../types';
import { fallIn } from './animations';
import { onTouchPeg } from '../interactions';

const SPRITESHEET_KEY = 'pegs';

const Peg = {
  preload(game: Phaser.Game) {
    game.load.spritesheet(
      SPRITESHEET_KEY,
      PEG_PROPS.sheet.uri,
      PEG_PROPS.sheet.width,
      PEG_PROPS.sheet.height,
      PEG_PROPS.sheet.length,
    );
  },

  addSpriteToGameAndGroup(
    position: Coords,
    game: Phaser.Game,
    group: Phaser.Group,
    type: PegType,
  ): Phaser.Sprite {
    const { x, y } = boardToScreenPosition(position);
    const sprite = game.add.sprite(x, y, SPRITESHEET_KEY, type, group);
    sprite.anchor.x = PEG_PROPS.anchor.x;
    sprite.anchor.y = PEG_PROPS.anchor.y;
    sprite.inputEnabled = true;
    sprite.events.onInputUp.add(onTouchPeg.bind(null, position));
    fallIn(sprite);
    return sprite;
  },
};

export default Peg;
