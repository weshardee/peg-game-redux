// @flow
import {connect} from 'react-redux';
import Pegs from './Pegs.react';

import type {State} from '../redux/State';

const mapStateToProps = (state: State) => ({
  pegs: Object.values(state.pegs),
  excited: state.excited,
  buzzed: state.buzzed,
});

const PegsContainer = connect(mapStateToProps)(Pegs);

export default PegsContainer;
