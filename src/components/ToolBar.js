import React from "react";
import {Toggle} from "../containers/ToggleContainer";
import {ShapeContainer} from "../containers/ShapeContainer"

export class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {shapeList: ["Shape1"]};
    this.addShape = this.addShape.bind(this);
  }

  addShape(){
    const newLength = this.state.shapeList.length+1;
    this.state.shapeList.push("Shape"+newLength);
  }

  render(){
    return (
      <div id="canvasToolbarWrapper">
        <div id="toolsToolBar">
          <button>Draw</button>
          <button>Erase</button>
        </div>
        <div id="shapesToolbar">
          <button onClick = {this.addShape}>Add Shape</button>
          <Toggle/>
        </div>
      </div>
    );
  }
}
