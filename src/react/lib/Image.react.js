// @flow
import React from 'react';
import getTransform from './styles/getTransform';

export type Spritesheet = {
  uri: string,
  width: number,
  height: number,
};

type DefaultProps = {
  rotation: number,
  x: number,
  y: number,
  pivot: { x: number, y: number },
  frame: number,
  onClick: () => void,
  alpha: number,
  scale: number,
};

type Props = DefaultProps & {
  src: string,
  width: number,
  height: number,
};

class Image extends React.Component<DefaultProps, Props, void> {
  static defaultProps: DefaultProps = {
    rotation: 0,
    x: 0,
    y: 0,
    pivot: { x: 0.5, y: 0.5 },
    onClick: () => {},
    frame: 0,
    alpha: 1,
    scale: 1,
  };

  props: Props;

  render(): React.Element<any> {
    const { props } = this;
    const { x, y, rotation, scale, alpha, width, height } = props;
    const style = {
      // sprite sheet image and offset
      backgroundImage: `url(${props.src})`,
      // sizing
      width,
      height,
      transform: getTransform({ x, y, rotation, scale }),
      transformOrigin: `${props.pivot.x * 100}% ${props.pivot.y * 100}%`,
      opacity: alpha,

      // position props
      position: 'absolute',

      // TODO move this into the transform
      left: (-props.width) * props.pivot.x,
      top: (-props.height) * props.pivot.y,
    };
    return <div style={style} onClick={props.onClick} />;
  }
}

export default Image;
