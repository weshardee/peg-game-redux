// @flow
import { BOARD_SIZE, BOARD_GRID_SIZE, BOARD_ROW_HEIGHT } from './constants';
import type { Coords } from './types';
import type Board from './Board';

export function getMiddlePosition(a: Coords, b: Coords): Coords {
  const deltaX = a.x - b.x;
  const deltaY = a.y - b.y;
  return {
    x: deltaX / 2 + b.x,
    y: deltaY / 2 + b.y,
  };
}

export function isValidMove(
  board: Board<any>,
  from: Coords,
  to: Coords,
): boolean {
  if (to.x > to.y || to.y >= board.size || to.y < 0 || to.x < 0) return false;
  const middle = getMiddlePosition(from, to);
  return board.get(middle) != null && board.get(to) == null;
}

const MOVE_DIRECTIONS = [
  { x: 0, y: 2 },
  { x: 0, y: -2 },
  { x: -2, y: -2 },
  { x: -2, y: 0 },
  { x: 2, y: 2 },
  { x: 2, y: 0 },
];

export function hasValidMoves(board: Board<any>, from: Coords): boolean {
  // make sure there's a peg at the coordinates
  if (board.get(from) == null) return false;
  return MOVE_DIRECTIONS.map(dir => ({ x: from.x + dir.x, y: from.y + dir.y }))
    .some(to => isValidMove(board, from, to));
}

function getXOffset(y) {
  return BOARD_SIZE - y * BOARD_GRID_SIZE / 2;
}

export function boardToScreenPosition(pos: Coords): Coords {
  return {
    x: pos.x * BOARD_GRID_SIZE + getXOffset(pos.y),
    y: pos.y * BOARD_ROW_HEIGHT,
  };
}

export function screenToBoardPosition(screenPos: Coords): Coords {
  const y = Math.round(screenPos.y / BOARD_ROW_HEIGHT);
  const x = Math.round((screenPos.x - getXOffset(y)) / BOARD_GRID_SIZE);
  return { x, y };
}

export function areEqual(a: Coords, b: Coords) {
  return a.x === b.x && a.y === b.y;
}
