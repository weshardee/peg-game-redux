// @flow
import Store from './Store';

import {areEqual, getMiddlePosition} from '../utils';
import nullthrows from 'nullthrows';
import shortid from 'shortid';

import {default as PegSheets} from '../sprites/peg/peg';
import type {Coords, Peg, PegType} from '../types';

export type TouchAction = {type: 'TOUCH'};

export type WipeAction = {type: 'WIPE_BOARD'};
export const wipe = () => ({type: 'WIPE_BOARD'});

export type PopulateAction = {type: 'POPULATE', pegs: Array<Peg>};
export const populate = (emptyPos: Coords): PopulateAction => {
  const pegs = [];
  Store.getState().board.forEach(position => {
    if (!areEqual(position, emptyPos)) {
      pegs.push(makePeg(position));
    }
  });
  return {type: 'POPULATE', pegs};
};

export type ExciteAction = {type: 'EXCITE', id: string};
export const excite = (id: string): ExciteAction => ({type: 'EXCITE', id});

export type BuzzAction = {type: 'BUZZ', id: string};
export const buzz = (id: string): BuzzAction => ({
  type: 'BUZZ',
  id,
});

export type MoveAction = {
  type: 'MOVE',
  id: string,
  from: Coords,
  to: Coords,
  kill: Peg,
};
export const move = (pegID: string, to: Coords): ?MoveAction | BuzzAction => {
  const state = Store.getState();
  const {pegs, board} = state;
  const from = pegs[pegID].pos;
  if (!from || board.get(to)) {
    return buzz(pegID);
  }
  const middlePos = getMiddlePosition(from, to);
  const middleID = board.get(middlePos);
  if (!middleID) {
    return buzz(pegID);
  }
  const kill = nullthrows(pegs[middleID]);
  return {
    type: 'MOVE',
    id: pegID,
    from,
    to,
    kill,
  };
};

// -----------------------------------------------------------------------------
// helpers
// -----------------------------------------------------------------------------

const PEG_TYPES = Object.keys(PegSheets);
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

// TODO
// function isGameOver() {
// this._pegsGroup.forEach(sprite => {
//   const pos = screenToBoardPosition(sprite);
//   sprite.alive = this.state.board.hasValidMoves(pos);
// });
//
// if (this._pegsGroup.getFirstAlive() === null) {
//   this.end();
// }
// }

// -----------------------------------------------------------------------------
// Aggregate types
// -----------------------------------------------------------------------------

export type Action =
  | TouchAction
  | PopulateAction
  | WipeAction
  | ExciteAction
  | BuzzAction
  | MoveAction;
