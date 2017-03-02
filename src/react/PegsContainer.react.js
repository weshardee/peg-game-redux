// @flow
import { connect } from 'react-redux';
import type { State } from '../redux/Store';
import Pegs from './Pegs.react';

const mapStateToProps = (state: State) => ({
  pegs: Object.values(state.pegs),
});

const PegsContainer = connect(mapStateToProps)(Pegs);

export default PegsContainer;
