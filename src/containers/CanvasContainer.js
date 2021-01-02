import React from 'react';
import {Canvas} from '../components/Canvas';
import {Point} from '../components/Point';


function createPoint(x,y,length){
  let id="Point"+length;
  return(
    <Point x={x} y={y} key={id}/>
  );
}

export class CanvasContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: document.getElementById('canvasWrapper').clientHeight - e.nativeEvent.offsetY - 23
    });
  }
  render() {
    var x = this.state.x;
    var y = this.state.y;

    return (
      <div class=''>
        <Canvas
          x={x}
          y={y}
          onMouseMove={this._onMouseMove.bind(this)}
        />
      </div>
    );
  }
}
