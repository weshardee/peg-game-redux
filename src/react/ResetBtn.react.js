// @flow
import {Motion, spring} from 'react-motion';
import React from 'react';
import Image from './lib/Image.react';
import {onTouchReset} from '../interactions';

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
          <svg
            style={{transform: `rotate(${spin}turn)`}}
            width="33px"
            height="30px"
            viewBox="160 112 33 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            onClick={this._onTouch}
          >
            <path
              d="M190.5,121.1 L190.55,121.2 C192.65,125.366667 192.466667,129.616667 190,133.95 C187.533333,138.483333 183.85,140.833333 178.95,141 C178.55,141.033333 178.183333,140.916667 177.85,140.65 C177.55,140.383333 177.383333,140.033333 177.35,139.6 C176.983333,137.2 176.833333,135.433333 176.9,134.3 C176.933333,133.9 177.066667,133.55 177.3,133.25 C177.566667,132.95 177.916667,132.8 178.35,132.8 C180.383333,132.633333 181.916667,131.683333 182.95,129.95 C183.9,128.333333 184.033333,126.666667 183.3,125 C182.333333,122.733333 180.7,121.533333 178.4,121.4 C176.716667,121.366667 175.316667,121.933333 174.15,123.1 C175.783333,124.033333 176.933333,124.8 177.6,125.4 C177.866667,125.633333 178.033333,125.916667 178.1,126.25 L178.05,127.25 L177.35,128 L163.45,136.05 L162.35,136.2 C161.983333,136.166667 161.666667,136 161.4,135.7 L161.05,134.7 L161.1,118.4 L161.3,117.55 L161.9,116.95 L162.7,116.7 L163.45,116.9 L166.95,118.9 C168.216667,117.2 169.633333,115.9 171.2,115 C174.366667,113.05 177.666667,112.533333 181.1,113.4 C184.4,114.2 187.133333,116.066667 189.3,119 L189.45,119.15 L190.5,121.1 Z"
              id="Path"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
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
