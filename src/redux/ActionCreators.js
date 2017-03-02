// @flow
import Store from './Store';
import type State from './Store';
import type { Coords, Peg, PegType } from '../types';
import shortid from 'shortid';
import {
  hasValidMoves,
  areEqual,
  isValidMove,
  getMiddlePosition,
} from '../utils';

export type Action =
  | NullAction
  | PopulateAction
  | WipeAction
  | ExciteAction
  | BuzzAction
  | MoveAction;

export type WipeAction = { type: 'WIPE_BOARD' };
export type NullAction = { type: 'NULL' };

export type PopulateAction = { type: 'POPULATE', pegs: Array<Peg> };
export const populate = (emptyPos: Coords): PopulateAction => {
  const pegs = [];
  Store.getState().board.forEach(position => {
    if (!areEqual(position, emptyPos)) {
      pegs.push(makePeg(position));
    }
  });
  return { type: 'POPULATE', pegs };
};

export type ExciteAction = { type: 'EXCITE', id: string };
export const excite = (id: string): ExciteAction => ({ type: 'EXCITE', id });

export type BuzzAction = { type: 'BUZZ', id: string };
export const buzz = (id: string): BuzzAction => ({ type: 'BUZZ', id });

export type MoveAction = {
  type: 'MOVE',
  id: string,
  to: Coords,
  kill: Peg,
};
export const moveTo = (to: Coords): ?MoveAction | BuzzAction => {
  const state = (Store.getState(): State);
  const { excited, pegs, board } = state;
  if (!state.excited) {
    return;
  }
  const pegPos = pegs[excited].pos;
  const isValid = isValidMove(board, pegPos, to);
  if (!isValid) {
    return buzz(excited);
  }
  const middlePos = getMiddlePosition(pegPos, to);
  const middleID = board.get(middlePos);
  const kill = pegs[middleID];
  return {
    type: 'MOVE',
    id: excited,
    to,
    kill,
  };
};

/* helpers
----------------------------------------------------------------------------- */

const PEG_TYPES = [0, 1, 2, 3, 4];
function randomPegType(): PegType {
  return PEG_TYPES[Math.floor(Math.random() * PEG_TYPES.length)];
}

function makePeg(pos: Coords): Peg {
  return {
    id: shortid(),
    type: randomPegType(),
    pos,
  };
}

function isGameOver() {
  // TODO
  // this._pegsGroup.forEach(sprite => {
  //   const pos = screenToBoardPosition(sprite);
  //   sprite.alive = this.state.board.hasValidMoves(pos);
  // });
  //
  // if (this._pegsGroup.getFirstAlive() === null) {
  //   this.end();
  // }
}
