// @flow
import { createSelector } from 'reselect';
import { hasValidMoves } from '../../utils';
import { getBoard, getPhase } from '../State';

const isGameOver = createSelector(
  [getPhase, getBoard],
  (phase, board) =>
    phase !== 'ready' && !board.any((pos, value) => hasValidMoves(board, pos)),
);

export default isGameOver;
