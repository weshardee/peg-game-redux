// @flow
import { Motion, spring } from 'react-motion';
import React from 'react';
import Sprite from './lib/Sprite.react';
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

const SPRITESHEET = {
  uri: RESET_URI,
  width: 50,
  height: 50,
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
          <Sprite
            x={this.props.x}
            y={this.props.y}
            onClick={this._onTouch}
            rotation={spin}
            sheet={SPRITESHEET}
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
