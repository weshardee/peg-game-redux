// @flow
import React from 'react';
import PegMotion from './PegMotion.react';
import {TransitionMotion, spring} from 'react-motion';

import type {Peg as PegState} from '../types';

type Props = {pegs: Array<PegState>, excited: ?string};

type MotionStyle = {
  alive: number,
};

type ChildProps = {
  key: string,
  style: MotionStyle,
  data: PegState,
};

// const getStyles = (props: Props): Array<ChildProps> => {
//   return props.pegs.map(peg => ({
//     key: peg.id,
//     style: { alive: 1 },
//     data: peg,
//   }));
// };

// const getChildren = (props: Props) =>
//   (children: Array<ChildProps>): Array<React.Element<any>> =>
//     children.map(child => (
//       <Peg
//         key={child.key}
//         isExcited={props.excited === child.data.id}
//         {...child.data}
//       />
//     ));

// class Pegs extends React.Component {
//   props: Props;
//   render() {
//     const { props } = this;
//     const pegs = (
//       <TransitionMotion
//         willLeave={() => ({ alive: 0 })}
//         styles={getStyles(props)}
//         children={getChildren(props)}
//       />
//     );
//     return <Group y={0} x={0}>{pegs}</Group>;
//   }
// }
//
function sortItems(a: ChildProps, b: ChildProps): number {
  return a.data.pos.y - b.data.pos.y;
}

class Pegs extends React.Component {
  props: Props;

  willLeave() {
    return {alive: spring(0)};
  }

  render() {
    const {pegs, excited} = this.props;
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        styles={pegs.map(peg => ({
          key: peg.id,
          style: {alive: 1},
          data: peg,
        }))}
        children={(items: Array<ChildProps>) => (
          <div>
            {items
              .sort(sortItems)
              .map((item: ChildProps) => (
                <PegMotion
                  key={item.key}
                  {...item.data}
                  alive={item.style.alive}
                  isExcited={excited === item.key}
                />
              ))}
          </div>
        )}
      />
    );
  }
}

export default Pegs;
