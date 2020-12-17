import React from 'react';

export class Point extends React.Component {

  render(){
    const x = this.props.x
    const y = this.props.y
    const leftPos = x.toString(10) + 'px'
    const upPos = y.toString(10) + 'px'

    return(
      <div
        style={{
            left: leftPos,
            bottom: upPos
          }}
        className = 'point'
      />
    );
  }
}
