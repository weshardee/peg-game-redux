// @flow
import {Motion, spring} from 'react-motion';
import React from 'react';
import Image from './lib/Image.react';
import {onTouchReset} from '../interactions';
import resetSVG from './images/reset.svg';

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
  state: State = {spin: 0};

  render() {
    const {spin} = this.state;
    return (
      <Motion
        defaultStyle={this.state}
        style={{spin: spring(spin)}}
        children={({spin}: AnimateProps) => (
          <Image
            x={this.props.x}
            y={this.props.y}
            src={resetSVG}
            rotation={spin}
            width={33}
            height={30}
            onClick={this._onTouch}
          />
        )}
      />
    );
  }

  _onTouch = () => {
    this.setState({spin: this.state.spin - 1});
    onTouchReset();
  };
}

export default ResetBtn;
