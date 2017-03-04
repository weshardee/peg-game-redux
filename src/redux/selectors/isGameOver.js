// @flow
import { createSelector } from 'reselect';
import type { State } from '../../types';
import type { BoardState } from '../reducers/board';
import { hasAnyValidMoves } from '../../utils';

const getBoard = (state: State): BoardState => state.board;

const isGameOver = createSelector([getBoard], hasAnyValidMoves);

export default isGameOver;
