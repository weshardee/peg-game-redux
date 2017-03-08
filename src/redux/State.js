// @flow

// -----------------------------------------------------------------------------
// reducers
// -----------------------------------------------------------------------------

import {combineReducers} from 'redux';

import board from './reducers/board';
import pegs from './reducers/pegs';
import numPegs from './reducers/numPegs';
import excited from './reducers/excited';
import phase from './reducers/phase';
import buzzed from './reducers/buzzed';

export const reducers = combineReducers({
  board,
  pegs,
  numPegs,
  excited,
  phase,
  buzzed,
});

// -----------------------------------------------------------------------------
// selectors
// -----------------------------------------------------------------------------

import type {BoardState} from './reducers/board';
import type {BuzzedState} from './reducers/buzzed';
import type {ExcitedState} from './reducers/excited';
import type {PegsState} from './reducers/pegs';
import type {NumPegsState} from './reducers/numPegs';
import type {PhaseState} from './reducers/phase';

// aggregate types for easy access from other modules
export type {
  BoardState,
  BuzzedState,
  ExcitedState,
  PegsState,
  NumPegsState,
  PhaseState,
};

export type State = {
  board: BoardState,
  buzzed: BuzzedState,
  excited: ExcitedState,
  pegs: PegsState,
  numPegs: NumPegsState,
  phase: PhaseState,
};

export const getBoard = (state: State): BoardState => state.board;
export const getPegs = (state: State): PegsState => state.pegs;
export const getBuzzed = (state: State): BuzzedState => state.buzzed;
export const getExcited = (state: State): ExcitedState => state.excited;
export const getNumPegs = (state: State): NumPegsState => state.numPegs;
export const getPhase = (state: State): PhaseState => state.phase;
