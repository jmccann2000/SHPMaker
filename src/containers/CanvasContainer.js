import React from 'react';
import {Canvas} from '../components/Canvas';
import {Point} from '../components/Point';
import {ShapeContainer} from '../containers/ShapeContainer';

function createPoint(x,y){
  return(
    <Point x={x} y={y} />
  );
}

export class CanvasContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state={ x: 0, y: 0, points:[]}
  }

  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: document.getElementById('canvasWrapper').clientHeight - e.nativeEvent.offsetY - 23
    });
  }

_onClick(e){
    var prevPoints = this.state.points;
    var x = this.state.x;
    var y = this.state.y;
    prevPoints.push(createPoint(x,y));
    this.setState({
      points: prevPoints
    });
  }




  render() {
    var x = this.state.x;
    var y = this.state.y;

    return (
      <div class=''>
        <Canvas x={x} y={y} onMouseMove={this._onMouseMove.bind(this)} onClick ={this._onClick.bind(this)} points={this.state.points}/>
      </div>
    );
  }
}
