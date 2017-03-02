// @flow
import React from 'react';
import Peg from './Peg.react';
import Group from './lib/Group.react';

import type { Peg as PegEntity } from '../types';

type Props = { pegs: Array<PegEntity> };

const Pegs = (props: Props) => {
  const pegs = props.pegs.map(peg => <Peg key={peg.id} {...peg} />);
  return <Group y={0} x={0}>{pegs}</Group>;
};

export default Pegs;
