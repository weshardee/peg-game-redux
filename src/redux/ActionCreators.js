// @flow
import Store from './Store';
import type State from './Store';
import type { Coords, Peg, PegType } from '../types';
import shortid from 'shortid';
import { hasValidMoves, areEqual, isValidMove, getMiddle } from '../utils';

export type NullAction = {
  type: 'NULL',
};

export type PopulateAction = {
  type: 'POPULATE',
  pegs: Array<Peg>,
};

export const populate = (emptyPos: Coords): PopulateAction => {
  const pegs = [];
  Store.getState().board.forEach(position => {
    if (!areEqual(position, emptyPos)) {
      pegs.push(makePeg(position));
    }
  });
  return { type: 'POPULATE', pegs };
};

export type SelectAction = {
  type: 'EXCITE' | 'DISAPPOINT',
  id: string,
};

export const selectPeg = (id: string): SelectAction => {
  const { board, pegs } = Store.getState();
  const peg = pegs[id];
  if (hasValidMoves(board, peg.pos)) {
    return { type: 'EXCITE', id };
  } else {
    return { type: 'DISAPPOINT', id };
  }
};

export type MoveAction = {
  type: 'MOVE',
  id: string,
  to: Coords,
  kill: Peg,
};

export const moveTo = (to: Coords): ?MoveAction | SelectAction => {
  const state = (Store.getState(): State);
  const { excited, pegs, board } = state;
  if (!state.excited) {
    return;
  }
  const pegPos = pegs[excited].pos;
  const isValid = isValidMove(board, pegPos, to);
  if (!isValid) {
    return { type: 'DISAPPOINT', id: excited };
  }
  const middlePos = getMiddle(pegPos, to);
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
