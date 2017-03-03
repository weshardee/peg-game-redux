// @flow
import type Phaser from './Phaser';
import { PEG_PROPS } from '../constants';
import { boardToScreenPosition } from '../utils';
import type { Peg } from '../types';
import { fallIn } from './animations';
import { onTouchPeg } from '../interactions';

const SPRITESHEET_KEY = 'pegs';

const Pegs = {
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
    peg: Peg,
    game: Phaser.Game,
    group: Phaser.Group,
  ): Phaser.Sprite {
    const { x, y } = boardToScreenPosition(peg.pos);
    const sprite = game.add.sprite(x, y, SPRITESHEET_KEY, peg.type, group);
    sprite.anchor.x = PEG_PROPS.anchor.x;
    sprite.anchor.y = PEG_PROPS.anchor.y;
    sprite.inputEnabled = true;
    sprite.events.onInputUp.add(onTouchPeg.bind(null, peg.id));
    fallIn(sprite);
    return sprite;
  },
};

export default Pegs;
