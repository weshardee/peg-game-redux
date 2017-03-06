// @flow
import React from 'react';
import Image from './lib/Image.react';
import Group from './lib/Group.react';
import { onTouchPeg } from '../interactions';
import sprites from '../sprites/peg/peg';
import shadow from '../sprites/peg/shadow.png';
import lerp from 'lerp';

import type { PegType } from '../types';

const LEAN_FACTOR = 0.02;

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

class Peg extends React.Component {
  props: Props;

  render() {
    const { props } = this;
    const groundNearnessFactor = lerp(1, 0, props.z / 600);
    const { img, frames } = sprites[props.type];
    const sprite = frames.front;
    return (
      <Group x={props.x} y={props.y}>
        <Image
          src={shadow}
          alpha={props.alive * groundNearnessFactor}
          /* TODO handle retina better*/
          scale={props.alive * 0.5 * groundNearnessFactor}
          width={56}
          height={22}
        />
        <Image
          alpha={props.alive}
          src={img}
          srcOffset={sprite.frame}
          onClick={this._onTouch}
          pivot={sprite.pivot}
          rotation={props.lean * LEAN_FACTOR}
          scale={props.alive * 0.5}
          width={sprite.frame.w}
          height={sprite.frame.h}
          y={-Math.abs(props.z)} /* reflect to sim a bounce*/
        />
      </Group>
    );
  }

  _onTouch = () => onTouchPeg(this.props.id);
}
export default Peg;
