import React from 'react';

export class Canvas extends React.Component {

  render(){
    let x =  this.props.x;
    let y = this.props.y;
    return(
    <div>
    <div id='canvasWrapper' onMouseMove={this.props.onMouseMove} />
    <p class='coords'> x: {x} y: {y}</p>
    </div>
  )
  }
}
