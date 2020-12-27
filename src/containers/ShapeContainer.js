import React from 'react';
import image from './../icons/test.png';
import {ShapeIcon} from './../components/ShapeIcon';

export class ShapeContainer extends React.Component{

  render(){

    return (
      <div className='shapeWrapper'>
        <div className = 'shapeButton'>
          <ShapeIcon
            shape = {this.props.shape}
            pointData = {this.props.pointData}
            currShape = {this.props.currShape}
            update = {this.props.update}
          />
        </div>
        <div className = 'smallButton'>
          <button onClick = {this.props.removeShape} id = {this.props.shape}>X</button>
          <button onClick = {this.props.moveUp} id = {this.props.shape}>U</button>
          <button onClick = {this.props.moveDown} id = {this.props.shape}>D</button>
          <button onClick = {this.props.merge} id = {this.props.shape}>Merge</button>
        </div>
      </div>
    )
  }
}
