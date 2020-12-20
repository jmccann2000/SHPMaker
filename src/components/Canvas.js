import React from 'react';

export class Canvas extends React.Component {

  render(){
    let x =  this.props.x;
    let y = this.props.y;
    return(
    <div>
      <div id='canvasWrapper' onMouseMove={this.props.onMouseMove} onClick={this.props.onClick}>
      <div>{this.props.points}</div>
      </div>
      <p id='coords'> x: {x} y: {y}</p>
    </div>
  )
  }
}
