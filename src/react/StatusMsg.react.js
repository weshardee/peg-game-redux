// @flow
import React from 'react';
import { connect } from 'react-redux';
import isGameOver from '../redux/selectors/isGameOver';
import getGameOverMessage from '../redux/selectors/getGameOverMessage';
import { Motion, spring } from 'react-motion';
import Text from './lib/Text.react';

import type { State } from '../redux/State';

type Props = {
  show: boolean,
  text: string,
};

type MotionProps = {
  alpha: number,
};

const mapStateToProps = (state: State) => ({
  show: isGameOver(state),
  text: getGameOverMessage(state),
});

const StatusMsg = (props: Props) => (
  <Motion
    style={{ alpha: spring(props.show ? 1 : 0) }}
    children={({ alpha }: MotionProps) => (
      <Text color="#ffffff" alpha={alpha} text={props.text} align="right" />
    )}
  />
);

export default connect(mapStateToProps)(StatusMsg);
