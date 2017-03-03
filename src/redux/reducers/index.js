// @flow
import { combineReducers } from 'redux';

import board from './board';
import pegs from './pegs';
import numPegs from './numPegs';
import excited from './excited';
import phase from './phase';
import buzzed from './buzzed';

export default combineReducers({
  board,
  pegs,
  numPegs,
  excited,
  phase,
  buzzed,
});
