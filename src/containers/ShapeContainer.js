import React from 'react';

export class ShapeContainer extends React.Component{

  render(){

    return (
      <div className='shapeWrapper'>
        <div className = 'shapeButton'>
          <button onHover = {this.onHover}> {this.props.shape} </button>
        </div>
        <div className = 'smallButton'>
          <button onClick = {this.props.removeShape} id = {this.props.shape}>X</button>
          <button onClick = {this.props.moveUp} id = {this.props.shape}>U</button>
          <button onClick = {this.props.moveDown} id = {this.props.shape}>D</button>
          <button onClick = {this.props.moveDown} id = {this.props.shape}>Merge</button>
        </div>
      </div>
    )
  }
}
