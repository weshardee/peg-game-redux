// @flow
import type Phaser from 'phaser-ce';
import {
  AUDIO_ERROR_ID,
  AUDIO_ERROR_URI,
  AUDIO_JUMP_URI,
  DEATH_DURATION,
  DEATH_SCALE,
  PEG_PROPS,
} from '../constants';
import { boardToScreenPosition } from '../utils';
import type { Peg, Coords } from '../types';
import { fallIn } from './animations';
import { onTouchPeg } from '../interactions';
import { slide } from './animations';

const SPRITESHEET_KEY = 'pegs';

export type PegEntity = {
  sprite: Phaser.Sprite,
  pos: Coords,
};

const Pegs = {
  preload(game: Phaser.Game) {
    game.load.spritesheet(
      SPRITESHEET_KEY,
      PEG_PROPS.sheet.uri,
      PEG_PROPS.sheet.width,
      PEG_PROPS.sheet.height,
      PEG_PROPS.sheet.length,
    );
    game.load.audio('jump', AUDIO_JUMP_URI);
    game.load.audio(AUDIO_ERROR_ID, AUDIO_ERROR_URI);
  },

  get(peg: Peg, game: Phaser.Game, group: Phaser.Group): PegEntity {
    const { x, y } = boardToScreenPosition(peg.pos);
    const sprite = group.game.add.sprite(
      x,
      y,
      SPRITESHEET_KEY,
      peg.type,
      group,
    );
    sprite.pivot.x = PEG_PROPS.pivot.x;
    sprite.pivot.y = PEG_PROPS.pivot.y;
    sprite.inputEnabled = true;
    sprite.events.onInputUp.add(onTouchPeg.bind(null, peg.id));
    fallIn(sprite);
    return { sprite, pos: peg.pos };
  },

  update(entity: PegEntity, pos: Coords): void {
    if (pos.x !== entity.pos.x || pos.y !== entity.pos.y) {
      slide(entity.sprite, boardToScreenPosition(pos));
      entity.sprite.game.sound.play('jump');
    }
  },

  kill({ sprite }: PegEntity): void {
    sprite.game.tweens.create(sprite).to({ alpha: 0 }, DEATH_DURATION).start();
    const deathTween = sprite.game.tweens
      .create(sprite.scale)
      .to(DEATH_SCALE, DEATH_DURATION);
    deathTween.onComplete.add(() => {
      if (sprite) sprite.destroy();
    });
    deathTween.start();
  },
};

export default Pegs;
