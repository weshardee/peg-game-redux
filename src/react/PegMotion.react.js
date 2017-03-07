// @flow
import {Motion, spring} from 'react-motion';
import React from 'react';
import Peg from './Peg.react';
import {boardToScreenPosition} from '../utils';
import type {Peg as PegProps} from '../types';
import {TweenMax, Power0} from 'gsap';
import gsapReactPlugin from 'gsap-react-plugin';

type Props = PegProps & {
  isExcited?: boolean,
  alive: number,
};

type State = {
  hop: number,
  shake: number,
};

type MotionProps = {
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

const HOP_INTERVAL = 0.7;
const HOP_HEIGHT = 50;

class PegMotion extends React.Component {
  props: Props;
  state: State = {shake: 0, hop: 0};

  _hopTween;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isExcited && !this.props.isExcited) {
      this._hopTween = TweenMax.to(this, HOP_INTERVAL, {
        state: {hop: 1},
        yoyo: true,
        repeat: -1,
        ease: Power0.easeNone,
      });
    } else if (!nextProps.isExcited && this._hopTween != null) {
      this._stopHopping();
    }
  }

  componentWillUnmount() {
    if (this._hopTween) {
      this._hopTween.kill();
    }
  }

  render() {
    const {id, pos, alive, type} = this.props;
    const {x, y} = boardToScreenPosition(pos);
    const {shake, hop} = this.state;
    console.log(hop);
    const interpolate = ({x, y, z}: MotionProps) => (
      <Peg
        x={x}
        y={y}
        z={z + Math.sin(hop * Math.PI) * HOP_HEIGHT}
        lean={Math.sin(shake * Math.PI)}
        id={id}
        alive={alive}
        type={type}
      />
    );
    return (
      <Motion
        defaultStyle={{x, y, z: 600, shake, hop}}
        style={{
          hop: spring(hop, falling),
          shake: spring(shake),
          x: spring(x, sliding),
          y: spring(y, sliding),
          z: spring(0, falling),
        }}
        children={interpolate}
      />
    );
  }

  _stopHopping() {
    if (this._hopTween) {
      this._hopTween.repeat(0);
      this._hopTween = null;
    }
  }
}

export default PegMotion;
