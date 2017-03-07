// @flow
import React from 'react';
import Image from './lib/Image.react';
import Group from './lib/Group.react';
import {onTouchPeg} from '../interactions';
import sprites from '../sprites/peg/peg';
import shadowSVG from './images/shadow.svg';
import lerp from 'lerp';

import type {PegType, PegState} from '../types';

type Props = {
  isExcited?: boolean,
  alive: number,
  lean: number,
  x: number, // screen space
  y: number, // screen space
  z: number, // added to y to simulate falling in
  type: PegType,
  id: string,
};

const LEAN_THRESHOLD = 0.5;
const DUCK_THRESHOLD = 40;
const GROUNDED_THRESHOLD = 5;

type State = {
  isGrounded: boolean,
};

class Peg extends React.Component {
  props: Props;
  state: State = {
    isGrounded: false,
  };

  getSpriteState(): PegState {
    if (this.state.isGrounded) {
      if (Math.abs(this.props.lean) > LEAN_THRESHOLD) return 'lean';
      return 'front';
    }
    const absZ = Math.abs(this.props.z);
    if (absZ < DUCK_THRESHOLD) return 'duck';
    return 'jump';
  }

  componentWillReceiveProps(nextProps: Props) {
    const isGrounded = Math.abs(nextProps.z) < GROUNDED_THRESHOLD &&
      Math.abs(this.props.z) < GROUNDED_THRESHOLD;
    if (isGrounded !== this.state.isGrounded) {
      this.setState({isGrounded});
    }
  }

  render() {
    const {props} = this;
    // provide a buffer during the fall to pause in the duck animation
    const modifiedZ = Math.max(0, Math.abs(props.z) - DUCK_THRESHOLD);
    const groundNearnessFactor = lerp(1, 0, modifiedZ / 600);
    const spriteState = this.getSpriteState(this);
    const {src, pivot, size} = sprites[props.type][spriteState];
    const flipX = spriteState === 'lean' && props.lean < 0;
    return (
      <Group x={props.x} y={props.y}>
        <Image
          src={shadowSVG}
          alpha={props.alive * groundNearnessFactor}
          /* TODO handle retina better*/
          scale={props.alive * groundNearnessFactor}
          width={55}
          height={34}
        />
        <div
          style={{
            transform: `scaleX(${flipX ? 1 : -1})`,
          }}
        >
          <Image
            alpha={props.alive}
            src={src}
            onClick={this._onTouch}
            pivot={pivot}
            scale={props.alive}
            width={size.w}
            height={size.h}
            y={-modifiedZ} /* reflect to sim a bounce*/
          />
        </div>
      </Group>
    );
  }

  _onTouch = () => onTouchPeg(this.props.id);
}
export default Peg;
