// @flow
import {Motion, spring} from 'react-motion';
import React from 'react';
import Peg from './Peg.react';
import {boardToScreenPosition} from '../utils';
import type {Peg as PegProps} from '../types';

type Props = PegProps & {
  isExcited?: boolean,
  alive: number,
};

type State = {
  lean: 0 | 1 | -1,
};

type MotionProps = {
  lean: number,
  x: number,
  y: number,
  z: number,
};

const falling = {
  stiffness: 100,
  damping: 10,
};

const sliding = {
  stiffness: 500,
  damping: 23,
};

const WOBBLE_INTERVAL = 200;

class PegMotion extends React.Component {
  props: Props;
  state: State = {lean: 0};

  _wobbleInterval: ?number;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isExcited) {
      this.setState({lean: 1});
      this._wobbleInterval = setInterval(this._wobble, WOBBLE_INTERVAL);
    } else if (this._wobbleInterval) {
      clearInterval(this._wobbleInterval);
      this.setState({lean: 0});
    }
  }

  componentWillUnmount() {
    if (this._wobbleInterval) {
      clearInterval(this._wobbleInterval);
    }
  }

  render() {
    const {id, pos, alive, type} = this.props;
    const screenPos = boardToScreenPosition(pos);
    const {lean} = this.state;
    const interpolate = ({z, lean, x, y}: MotionProps) => (
      <Peg x={x} y={y} z={z} lean={lean} id={id} alive={alive} type={type} />
    );
    return (
      <Motion
        defaultStyle={{z: 600, lean, x: screenPos.x, y: screenPos.y}}
        style={{
          lean: spring(lean),
          x: spring(screenPos.x, sliding),
          y: spring(screenPos.y, sliding),
          z: spring(0, falling),
        }}
        children={interpolate}
      />
    );
  }

  _wobble = () => this.setState({lean: -this.state.lean});
}

export default PegMotion;
