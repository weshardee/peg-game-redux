// @flow
import React from 'react';

type Props = {
  width: number,
  height: number,
  backgroundColor: string,
  children?: React.Element<any>,
};

class Stage extends React.Component {
  props: Props;
  static defaultProps = {
    width: 500,
    height: 500,
    backgroundColor: 'black',
  };
  render() {
    const { width, height, backgroundColor } = this.props;
    const style = {
      overflow: 'hidden',
      position: 'relative',
      width,
      height,
      backgroundColor,
    };
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Stage;
