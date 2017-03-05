// @flow
import React from 'react';
import getTransform from './styles/getTransform';

type Props = {
  x: number,
  y: number,
  children?: React.Element<any>,
};

const Group = ({ x, y, children }: Props) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      transform: getTransform({ x, y }),
    }}
  >
    {children}
  </div>
);

export default Group;
