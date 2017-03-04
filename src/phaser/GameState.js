// @flow
import Phaser from 'phaser-ce';
import nullthrows from 'nullthrows';

import { wipe } from '../redux/ActionCreators';
import Pegs from './Pegs';
import Tiles from './Tiles';
import Store from '../redux/Store';

import { excite, fadeIn, fadeOut } from './animations';

import type { State } from '../types';
import type { PegEntity } from './Pegs';

import {
  AUDIO_ERROR_ID,
  AUDIO_ERROR_URI,
  AUDIO_JUMP_URI,
  RESET_URI,
  GAME_STYLE,
  BOARD_X,
  BOARD_Y,
} from '../constants';

const TEXT_STYLE = {
  fill: '#ffffff',
};

class GameState extends Phaser.State {
  // local state used for iterating over changes
  _state: State;
  _pegEntities: Map<string, PegEntity> = new Map();

  // render layering groups
  _boardGroup: Phaser.Group;
  _tilesGroup: Phaser.Group;
  _pegsGroup: Phaser.Group;

  // gui stuff
  _endMessage: Phaser.Text;

  // animations
  _excitedTween: Phaser.Tween;

  /* Phaser GameState lifecycle methods
  --------------------------------------------------------------------------- */

  preload() {
    Tiles.preload(this.game);
    Pegs.preload(this.game);
    this.game.load.audio('jump', AUDIO_JUMP_URI);
    this.game.load.audio(AUDIO_ERROR_ID, AUDIO_ERROR_URI);
    this.game.load.image('reset', RESET_URI);
  }

  create() {
    this.game.stage.backgroundColor = GAME_STYLE.backgroundColor;
    // initialize groups for tiles and pegs
    this._boardGroup = this.game.add.group(undefined, 'board');
    this._tilesGroup = this.game.add.group(this._boardGroup, 'tiles');
    this._pegsGroup = this.game.add.group(this._boardGroup, 'pegs');
    // add reset button
    this.game.add.button(0, 0, 'reset', () => Store.dispatch(wipe()));
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
    this._state.board.forEach(position => {
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
    const nextState = Store.getState();
    const { board, pegs, excited } = nextState;
    // populate board
    if (
      !this._state || this._state.board !== board || this._state.pegs !== pegs
    ) {
      const pegEntities: Map<string, PegEntity> = new Map();
      board.forEach((pos, id) => {
        let pegEntity;
        if (id) {
          pegEntity = this._pegEntities.get(id);
          this._pegEntities.delete(id);
          if (!pegEntity) {
            pegEntity = Pegs.get(pegs[id], this.game, this._pegsGroup);
          } else {
            Pegs.update(pegEntity, pos);
          }
          pegEntities.set(id, pegEntity);
        }
      });
      // cleanup dead sprites
      this._pegEntities.forEach(Pegs.kill);
      this._pegEntities = pegEntities;
    }
    if (excited !== this._excited) {
      if (this._excitedTween) {
        // turn off any existing tween
        this._excitedTween.loop(false);
      }
      if (excited) {
        const entity = this._pegEntities.get(excited);
        if (entity) {
          this._excitedTween = excite(entity.sprite);
        }
      }
    }
    // TODO handle disappointment
    // shake(this.excited);
    // TODO handle game over
    // if (phase === 'gameover') {
    //   this._endMessage.text = state.message;
    //   fadeIn(this._endMessage);
    // } else {
    //   fadeOut(this._endMessage);
    // }
    this._state = nextState;
  };
}

export default GameState;
