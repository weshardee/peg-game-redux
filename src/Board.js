// @flow

import invariant from 'invariant';

type BoardCoords = { x: number, y: number };

/**
 * Represents a triangular game board. The first row is a single space in length
 * and each subsequen row is one unit longer until the final row which will
 * have a number of spaces equal to the `size` of the board.
 *
 * Boards are Immutable.
 */
class Board<T> {
  size: number;
  __rows: Array<Array<?T>>;
  isEmpty: boolean = true;

  constructor(size: number = 0, source?: Board<T>) {
    this.size = size;
    this.__rows = new Array(size);
    for (let y = 0; y < size; y++) {
      this.__rows[y] = [];
      for (let x = 0; x <= y; x++) {
        this.__rows[y][x] = source ? source.__rows[y][x] : null;
      }
    }
  }

  get({ x, y }: BoardCoords): ?T {
    if (x > y || y > this.size) return undefined;
    return this.__rows[y][x];
  }

  set({ x, y }: BoardCoords, value: ?T): Board<T> {
    invariant(x <= y && y <= this.size, 'invalid board position');
    const nextBoard = new Board(this.size, this);
    nextBoard.__rows[y][x] = value;
    return nextBoard;
  }

  wipe(): Board<T> {
    return new Board(this.size);
  }

  forEach(cb: (coords: BoardCoords, value: ?T) => void): void {
    for (let y = 0; y < this.size; y++) {
      const row = this.__rows[y];
      const rowSize = row.length;
      for (let x = 0; x < rowSize; x++) {
        const coords = { x, y };
        const value = this.__rows[y][x];
        cb(coords, value);
      }
    }
  }

  any(cb: (coords: BoardCoords, value: ?T) => boolean): boolean {
    for (let y = 0; y < this.size; y++) {
      const row = this.__rows[y];
      const rowSize = row.length;
      for (let x = 0; x < rowSize; x++) {
        const coords = { x, y };
        const value = this.__rows[y][x];
        if (cb(coords, value)) return true;
      }
    }
    return false;
  }

  every(cb: (coords: BoardCoords, value: ?T) => boolean): boolean {
    for (let y = 0; y < this.size; y++) {
      const row = this.__rows[y];
      const rowSize = row.length;
      for (let x = 0; x < rowSize; x++) {
        const coords = { x, y };
        const value = this.__rows[y][x];
        if (!cb(coords, value)) return false;
      }
    }
    return true;
  }

  map(cb: (coords: BoardCoords, value: ?T) => ?T): Board<T> {
    const nextBoard = this.wipe();
    this.forEach((pos, value) => {
      nextBoard.__rows[pos.y][pos.x] = cb(pos, value);
    });
    return nextBoard;
  }

  toString(): string {
    return this.__rows.map(row => row.toString()).join('\n');
  }
}

export default Board;
