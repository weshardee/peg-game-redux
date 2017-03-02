// @flow
import Phaser from './Phaser';

import Pegs from './Pegs';
import Tiles from './Tiles';
import Store from '../redux/Store';
import type State from '../redux/Store';
import * as ActionCreators from '../redux/ActionCreators';

import { screenToBoardPosition } from '../utils';

import { excite, fadeIn, fadeOut, slide } from './animations';

import {
  AUDIO_ERROR_ID,
  AUDIO_ERROR_URI,
  AUDIO_JUMP_URI,
  DEATH_DURATION,
  DEATH_SCALE,
  RESET_URI,
  GAME_STYLE,
  BOARD_X,
  BOARD_Y,
} from '../constants';

const TEXT_STYLE = {
  fill: '#ffffff',
};

class GameState extends Phaser.State {
  state: State;

  _boardGroup: Phaser.Group;
  _tilesGroup: Phaser.Group;
  _pegsGroup: Phaser.Group;

  _renderedPegs: Map<string, Phaser.Sprite> = new Map();

  _endMessage: Phaser.Text;
  _excitedTween: Phaser.Tween;

  /* Phaser GameState lifecycle methods
  --------------------------------------------------------------------------- */

  preload() {
    Tiles.preload(this.game);
    Pegs.preload(this.game);
    this.game.load.audio('jump', AUDIO_JUMP_URI);
    this.game.load.audio(AUDIO_ERROR_ID, AUDIO_ERROR_URI);
    this.game.load.image('reset', RESET_URI, 190, 49);
  }

  create() {
    this.game.stage.backgroundColor = GAME_STYLE.backgroundColor;
    // initialize groups for tiles and pegs
    this._boardGroup = this.game.add.group(undefined, 'board');
    this._tilesGroup = this.game.add.group(this._boardGroup, 'tiles');
    this._pegsGroup = this.game.add.group(this._boardGroup, 'pegs');
    // add reset button
    this.game.add.button(0, 0, 'reset', () =>
      Store.dispatch({ type: 'WIPE_BOARD' }));
    // add banner
    this._endMessage = this.game.add.text(
      this.world.width - 20,
      14,
      '',
      TEXT_STYLE,
    );
    this._endMessage.anchor.x = 1;
    // this._endMessage.alpha = 0;
    // attach to Store
    Store.subscribe(this.onStateChange);
    this.onStateChange();
    // for each board space, we need a tile
    const { board } = this.state;
    board.forEach(position => {
      const tile = Tiles.getSprite(position, this.game);
      this._tilesGroup.add(tile);
    });
    // center board
    this._boardGroup.x = BOARD_X;
    this._boardGroup.y = BOARD_Y;
  }

  /* Redux state binding
  --------------------------------------------------------------------------- */

  onStateChange = () => {
    // TODO write this more declaratively;
    // TODO React binding for Phaser?
    const state = (Store.getState(): State);
    const { board, pegs, excited, phase } = state;
    // populate board
    if (board !== this.state.board) {
      const renderedPegs = new Map();
      board.forEach((position, id) => {
        if (id != null) {
          let sprite = this._renderedPegs.get(id);
          if (sprite) {
            // move sprite
            console.log(
              'move',
              id,
              'from',
              this.state.pegs[id].pos,
              'to',
              pegs[id].pos,
            );
            const { pos } = pegs[id];
            if (this.state.board.get(pos) !== id) {
              slide(sprite, pos);
              this.game.sound.play('jump');
            }
          } else {
            // add sprite
            const peg = pegs[id];
            sprite = Pegs.addSpriteToGameAndGroup(
              peg,
              this.game,
              this._pegsGroup,
            );
          }
          renderedPegs.set(id, sprite);
          this._renderedPegs.delete(id);
        }
      });
      // cleanup dead sprites
      this._renderedPegs.forEach((sprite, id) => {
        // animate death
        this.game.tweens
          .create(sprite)
          .to({ alpha: 0 }, DEATH_DURATION)
          .start();
        const deathTween = this.game.tweens
          .create(sprite.scale)
          .to(DEATH_SCALE, DEATH_DURATION);
        deathTween.onComplete.add(() => {
          if (sprite) sprite.destroy();
        });
        deathTween.start();
      });
      this._renderedPegs = renderedPegs;
    }
    if (excited !== this.state.excited) {
      if (this._excitedTween) {
        this._excitedTween.loop(false);
      }
      if (excited) {
        const sprite = this._renderedPegs.get(excited);
        this._excitedTween = excite(sprite);
      }
    }
    // TODO handle disappointment
    // shake(this.excited);
    if (phase === 'gameover') {
      this._endMessage.text = state.message;
      fadeIn(this._endMessage);
    } else {
      fadeOut(this._endMessage);
    }
    this.state = state;
  };

  /* handlers
  --------------------------------------------------------------------------- */

  onTileClick = (sprite: Phaser.Sprite) => {
    const boardPos = screenToBoardPosition(sprite);
    if (this.state.phase === 'ready') {
      Store.dispatch(ActionCreators.populate(boardPos));
    } else if (this.state.excited) {
      Store.dispatch(ActionCreators.moveTo(boardPos));
    }
  };
}

export default GameState;
