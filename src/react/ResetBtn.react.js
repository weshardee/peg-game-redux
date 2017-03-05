// @flow
import { Motion, spring } from 'react-motion';
import React from 'react';
import Image from './lib/Image.react';
import { onTouchReset } from '../interactions';
import { RESET_URI } from '../constants';

type Props = {
  x: number,
  y: number,
};

type State = {
  spin: number,
};

type AnimateProps = {
  spin: number,
};

class ResetBtn extends React.Component {
  props: Props;
  state: State = { spin: 0 };

  render() {
    const { spin } = this.state;
    return (
      <Motion
        defaultStyle={this.state}
        style={{
          spin: spring(spin),
        }}
        children={({ spin }: AnimateProps) => (
          <Image
            src={RESET_URI}
            width={50}
            height={50}
            x={this.props.x}
            y={this.props.y}
            rotation={spin}
            onClick={this._onTouch}
          />
        )}
      />
    );
  }

  _onTouch = () => {
    this.setState({ spin: this.state.spin - 1 });
    onTouchReset();
  };
}

export default ResetBtn;
