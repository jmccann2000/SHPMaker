import React from 'react';
import {ShapeList} from './../components/ShapeList'


export class ShapeListContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const list = this.props.shapeList;
    const isToggleOn = this.props.isToggleOn;

    const disp = isToggleOn?"block":"none";
    const style = {
      display: disp
    }

    const removeShape = this.props.removeShape;
    const moveUp = this.props.moveUp;
    const moveDown = this.props.moveDown;

    return (
      <div>
        <div className = "shapeWrapper" id='shapeListWrapper' style = {style}>
          <ShapeList
            list={list}
            removeShape = {removeShape}
            moveUp = {moveUp}
            moveDown = {moveDown}
          />
        </div>
      </div>
    )
  }
}
