import React from 'react';

function generateRandomPoints(width, height, num){
  var points = [];
  for(var i = 0; i < num; i++){
    const point = [width*Math.random(), height*Math.random()]
    points[i] = point;
  }

  return points;
}

export class ShapeIcon extends React.Component{

  componentWillUpdate(){

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    const miniCanvasWidth = 275;
    const miniCanvasHeight = 150;

    const canvasWidth = document.getElementById('canvasWrapper').clientWidth;
    const canvasHeight = document.getElementById('canvasWrapper').clientHeight;

    //const points = generateRandomPoints(canvasWidth, canvasHeight, 1000);
    const shapeData = this.props.shapeData;
    const shape = this.props.shape;

    const pointData = shapeData.getPointData();
    const currPoints = pointData.get(shapeData.getCurrShape());

    //alert(currPoints.length)
    for(var i = 0; i < currPoints.length; i++){
      const currPoint = currPoints[i];
      console.log(currPoint);
      ctx.fillRect((currPoint[0])*300/canvasWidth,(canvasHeight-currPoint[1])*150/canvasHeight,5,5);
    }

  }

  updateCurrShape(){
    const shape = this.props.shape;
    const shapeData = this.props.shapeData;
    shapeData.setCurrShape(shape);

  }

  render(){

    return(
      <div>
        <canvas onClick = {this.updateCurrShape.bind(this)} ref="canvas"/>
      </div>
    );

  }
}
