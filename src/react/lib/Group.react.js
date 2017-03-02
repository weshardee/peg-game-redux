// @flow
import React from 'react';
import transform from './styles/transform';

type Props = {
  x: number,
  y: number,
  children?: React.Element<any>,
};

const Group = (props: Props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: transform(props.x, props.y),
      }}
    >
      {props.children}
    </div>
  );
};

export default Group;
