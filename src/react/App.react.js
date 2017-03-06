// @flow

import React from 'react';
import Stage from './lib/Stage.react';
import Tiles from './Tiles.react';
import PegsContainer from './PegsContainer.react';
import Group from './lib/Group.react';
import ResetBtn from './ResetBtn.react';
import StatusMsg from './StatusMsg.react';

type State = {
  width: number,
  height: number,
};

function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

class App extends React.Component {
  state: State = getWindowDimensions();

  componentWillMount() {
    this._layout();
    window.addEventListener('resize', this._layout);
  }

  _layout = () => {
    this.setState(getWindowDimensions());
  }

  render() {
    return (
      <Stage>
        <Group x={this.state.width / 2} y={this.state.height / 3}>
          <Tiles />
          <PegsContainer />
        </Group>
        <Group y={14} x={this.state.width - 20}>
          <StatusMsg />
        </Group>
        <ResetBtn x={25} y={25} />
      </Stage>
    );
  }
}

export default App;
