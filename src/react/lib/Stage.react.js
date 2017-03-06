// @flow
import React from 'react';

type Props = {
  width: number | string,
  height: number | string,
  backgroundColor: string,
  children?: React.Element<any>,
};

class Stage extends React.Component {
  props: Props;
  static defaultProps = {
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
