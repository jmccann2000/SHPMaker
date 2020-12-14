import React from 'react';
import {Canvas} from '../components/Canvas';

export class CanvasContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  
  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: document.getElementById('canvasWrapper').clientHeight - e.nativeEvent.offsetY
    });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        <Canvas x={x} y={y} onMouseMove={this._onMouseMove.bind(this)} />
      </div>
    );
  }
}
