import React from 'react';
import {ShapeList} from './../components/ShapeList'


export class ShapeListContainer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const isToggleOn = this.props.isToggleOn;

    const disp = isToggleOn?"block":"none";
    const style = {
      display: disp
    }

    return (
      <div>
        <div className = "shapeWrapper" id='shapeListWrapper' style = {style}>
          <ShapeList
            pointData = {this.props.pointData}
            currShape = {this.props.currShape}
            update = {this.props.update}
          />
        </div>
      </div>
    )
  }
}
