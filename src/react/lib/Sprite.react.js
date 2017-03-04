// @flow
import React from 'react';
import transform from './styles/transform';

export type Spritesheet = {
  uri: string,
  width: number,
  height: number,
};

type DefaultProps = {
  rotation: number,
  x: number,
  y: number,
  anchor: { x: number, y: number },
  frame: number,
  onClick: () => void,
};

type Props = DefaultProps & {
  sheet: Spritesheet,
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

class Sprite extends React.Component<DefaultProps, Props, void> {
  static defaultProps: DefaultProps = {
    rotation: 0,
    x: 0,
    y: 0,
    anchor: { x: 0, y: 0 },
    onClick: () => {},
    frame: 0,
  };

  props: Props;

  render(): React.Element<any> {
    const { props } = this;
    const { x, y, rotation } = props;
    const style = {
      ...getSpriteSheetStyle(props.sheet),
      position: 'absolute',
      backgroundPositionX: `-${props.frame}00%`,
      transform: transform({ x, y, rotation }),
      left: (-props.sheet.width) * props.anchor.x,
      top: (-props.sheet.height) * props.anchor.y,
      transformOrigin: `${props.anchor.x * 100}% ${props.anchor.y * 100}%`,
    };
    return <div style={style} onClick={props.onClick} />;
  }
}

export default Sprite;
