// @flow
import { connect } from 'react-redux';
import Pegs from './Pegs.react';

// import type { State } from '../redux/Store';

const mapStateToProps = (state: Object) => ({
  pegs: Object.values(state.pegs),
});

const PegsContainer = connect(mapStateToProps)(Pegs);

export default PegsContainer;
