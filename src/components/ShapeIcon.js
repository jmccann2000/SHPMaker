import React from 'react';

export class ShapeIcon extends React.Component{
  componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillRect(10,10,1,1);
  }

  render(){
    return(
      <div>
        <canvas ref="canvas" />
      </div>
    )
  }
}
