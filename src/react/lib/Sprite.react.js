// @flow
import React from 'react';
import transform from './styles/transform';

export type Spritesheet = {
  uri: string,
  width: number,
  height: number,
};

type Props = {
  x: number,
  y: number,
  sheet: Spritesheet,
  anchor: { x: number, y: number },
  frame: number,
};

function getSpriteSheetStyle(
  sheet: Spritesheet,
): {
  backgroundImage: string,
  width: number,
  height: number,
} {
  const { width, height } = sheet;
  return {
    backgroundImage: `url(${sheet.uri})`,
    width,
    height,
  };
}

class Sprite extends React.Component {
  props: Props;
  static defaultProps = {
    anchorX: 0,
    anchorY: 0,
    frame: 0,
  };

  render(): React.Element<any> {
    const { props } = this;
    const style = {
      ...getSpriteSheetStyle(props.sheet),
      position: 'absolute',
      backgroundPositionX: `-${props.frame}00%`,
      transform: transform(props.x, props.y),
      left: (-props.sheet.width) * props.anchor.x,
      top: (-props.sheet.height) * props.anchor.y,
    };
    return <div style={style} />;
  }
}

export default Sprite;
