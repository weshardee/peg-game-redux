// @flow
import {Motion, spring} from 'react-motion';
import React from 'react';
import Peg from './Peg.react';
import {boardToScreenPosition} from '../utils';
import type {Peg as PegProps} from '../types';
import {TweenMax, Circ, Power0} from 'gsap';
import gsapReactPlugin from 'gsap-react-plugin';

type Props = PegProps & {
  isExcited?: boolean,
  isBuzzed?: boolean,
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

const HOP_INTERVAL = 0.3; // seconds
const HOP_HEIGHT = 70;

const SHAKE_DURATION = 0.25; // seconds

class PegMotion extends React.Component {
  props: Props;
  state: State = {shake: 0, hop: 0};

  _hopTween;
  _shakeCount: number = 0;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isExcited && !this.props.isExcited) {
      this._hop(nextProps);
    }
    if (nextProps.isBuzzed) {
      this._shake();
    }
    // else if (!nextProps.isExcited && this._hopTween != null) {
    //   this._stopHopping();
    // }
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
    const lean = Math.sin(shake);
    const interpolate = ({x, y, z}: MotionProps) => (
      <Peg
        x={x}
        y={y}
        z={z + hop}
        lean={lean}
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

  _hop = (props: Props = this.props) => {
    if (props.isExcited) {
      this._hopTween = TweenMax.to(this, HOP_INTERVAL, {
        state: {hop: HOP_HEIGHT},
        yoyo: true,
        repeat: 1,
        ease: Circ.easeOut,
        onComplete: this._hop,
      });
    }
  };

  _shake = () => {
    TweenMax.to(this, SHAKE_DURATION, {
      state: {shake: Math.PI * 2},
      yoyo: true,
      repeat: 1,
      ease: Power0.easeNone,
      onComplete: this._resetShake(),
    });
  };

  _resetShake = () => {
    this.setState({shake: 0});
  };
}

export default PegMotion;
