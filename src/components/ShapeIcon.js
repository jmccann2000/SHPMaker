import React from 'react';

function generateRandomPoints(width, height, num){
  var points = []
  for(var i = 0; i < num; i++){
    const point = [width*Math.random(), height*Math.random()]
    points[i] = point;
  }

  return points;
}

export class ShapeIcon extends React.Component{
  componentDidMount(){
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    const miniCanvasWidth = 240;
    const miniCanvasHeight = 140;

    const canvasWidth = document.getElementById('canvasWrapper').clientWidth;
    const canvasHeight = document.getElementById('canvasWrapper').clientHeight;

    const points = generateRandomPoints(canvasWidth, canvasHeight, 1000);

    for(var i = 0; i < points.length; i++){
      ctx.fillRect(points[i][0],points[i][1],1,1);
    }
  }

  render(){
    return(
      <div>
        <canvas ref="canvas" />
      </div>
    )
  }
}