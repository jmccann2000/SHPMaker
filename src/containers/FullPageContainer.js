import React from 'react';
import {CanvasContainer} from './CanvasContainer';
import {ToolBarContainer} from './ToolBarContainer';
import {Point} from '../components/Point.js';

function createPoint(x,y){
  return(
    <Point x={x} y={y} />
  );
}

export class FullPageContainer extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      x: 0, y: 0,
      points:[],
      shapeList:[],
      pointLen: 0,
      shapeLen: 0
    };
  }

  _onMouseMoveCanvas(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: document.getElementById('canvasWrapper').clientHeight - e.nativeEvent.offsetY - 23
    });
  }

  _onClickCanvas(e){
      var prevPoints = this.state.points;
      var x = this.state.x;
      var y = this.state.y;
      var pointCount = this.state.pointLen+1;
      prevPoints.push(createPoint(x,y));
      this.setState({
        points: prevPoints,
        pointLen: pointCount
      });
    }

  render(){
    return(
      <div>
        <ToolBarContainer
          shapeList={this.state.shapeList}
        />
        <CanvasContainer
          onMouseMove={this._onMouseMoveCanvas.bind(this)}
          onClick={this._onClickCanvas.bind(this)}
          points={this.state.points}
          pointLen={this.state.pointLen}
          x={this.state.x}
          y={this.state.y}
        />
      </div>
    );
  }
}
