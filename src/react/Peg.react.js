// @flow
import { Motion, spring } from 'react-motion';
import React from 'react';
import Image from './lib/Image.react';
import Group from './lib/Group.react';
import { boardToScreenPosition } from '../utils';
import type { Peg as PegProps } from '../types';
import { onTouchPeg } from '../interactions';
import sprites from '../sprites/peg/peg';
import shadow from '../sprites/peg/shadow.png';

type Props = PegProps & {
  isExcited?: boolean,
  alive: number,
};

type State = {
  lean: 0 | 1 | -1,
};

type AnimateProps = {
  offsetY: number,
  lean: number,
  x: number,
  y: number,
};

const falling = {
  stiffness: 400,
  damping: 20,
};

const sliding = {
  stiffness: 500,
  damping: 23,
};

const WOBBLE_INTERVAL = 200;
const LEAN_AMOUNT = 0.02;

class Peg extends React.Component {
  props: Props;
  state: State = { lean: 0 };

  _wobbleInterval: ?number;

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isExcited) {
      this.setState({ lean: 1 });
      this._wobbleInterval = setInterval(this._wobble, WOBBLE_INTERVAL);
    } else if (this._wobbleInterval) {
      clearInterval(this._wobbleInterval);
      this.setState({ lean: 0 });
    }
  }

  componentWillUnmount() {
    if (this._wobbleInterval) {
      clearInterval(this._wobbleInterval);
    }
  }

  render() {
    const { pos, alive, type } = this.props;
    const screenPos = boardToScreenPosition(pos);
    const { lean } = this.state;
    const interpolate = ({ offsetY, lean, x, y }: AnimateProps) => (
      <Group x={x} y={y}>
        <Image
          alpha={alive}
          src={shadow}
          scale={alive * 0.5} /* TODO handle retina better*/
          width={56}
          height={22}
        />
        <Image
          alpha={alive}
          src={sprites[type].img}
          onClick={this._onTouch}
          pivot={{ x: 0.5, y: 1 }}
          rotation={lean * LEAN_AMOUNT}
          scale={alive * 0.5}
          width={64}
          height={92}
          y={-Math.abs(offsetY)} /* reflect to sim a bounce*/
        />
      </Group>
    );
    return (
      <Motion
        defaultStyle={{ offsetY: 600, lean, x: screenPos.x, y: screenPos.y }}
        style={{
          offsetY: spring(0, falling),
          lean: spring(lean),
          x: spring(screenPos.x, sliding),
          y: spring(screenPos.y, sliding),
        }}
        children={interpolate}
      />
    );
  }

  _onTouch = () => onTouchPeg(this.props.id);

  _wobble = () => this.setState({ lean: -this.state.lean });
}

export default Peg;
