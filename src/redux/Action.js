// @flow
import type { Peg } from '../types';

import type {SelectAction} from './ActionCreators';

export type Action =
  | SelectAction
  | { type: 'POPULATE', pegs: Array<Peg> }
  | { type: 'WIPE_BOARD' }
