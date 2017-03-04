// @flow
import React from 'react';
import OpenSansBold from './fonts/OpenSans-Bold.ttf';

type Align = 'right' | 'center' | 'left';

type Props = {
  text: string,
  family?: string,
  size?: string | number,
  alpha?: number,
  color?: string | number,
  align?: Align,
};

console.log(OpenSansBold);

const transforms: { [key: Align]: ?string } = {
  center: 'translateX(-50%)',
  right: 'translateX(-100%)',
  left: undefined,
};

const Text = (props: Props) => (
  <div
    style={{
      top: 0,
      fontFamily: OpenSansBold,
      fontSize: props.size || 24,
      fontWeight: props.weight || 'bold',
      opacity: props.alpha,
      color: props.color,
      textAlign: props.align,
      // control alignment from origin position
      transform: props.align ? transforms[props.align] : undefined,
      width: 500,
    }}
  >
    {props.text}
  </div>
);

export default Text;
