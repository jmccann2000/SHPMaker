import React from "react";
import {Toggle} from "../components/Toggle";
import {ShapeListContainer} from "../containers/ShapeListContainer"
import {ShapeList} from "./ShapeList"

function removeFromList(id, list){
  const index = list.indexOf(id);
  if (index > -1) {
    list.splice(index, 1);
  }
}

export class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      sl: ["Shape1"],
      len: 1
    };
    this.addShape = this.addShape.bind(this);
    this.removeShape = this.removeShape.bind(this);
    this.minimizeShapeList = this.minimizeShapeList.bind(this);
  }

  addShape(){
    const newLength = this.state.len+1;
    const new_sl = this.state.sl;
    new_sl.push("Shape"+newLength);
    this.setState({
      len: this.state.len+1,
      sl: new_sl
    });
  }

  removeShape(e){
    const newLength = this.state.len+1;
    const new_sl = this.state.sl;
    removeFromList(e.target.getAttribute("id"), new_sl);
    this.setState({
      len: this.state.len-1,
      sl: new_sl
    });
  }

  minimizeShapeList() {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render(){
    const shapeList = this.state.sl;
    const toggle = this.state.toggle;

    return (
      <div id="canvasToolbarWrapper">
        <div id="toolsToolBar">
          <button>Draw</button>
          <button>Erase</button>
        </div>
        <div id="shapesToolbar">
          <button onClick = {this.addShape}>Add Shape</button>
          <Toggle minimizeShapeList = {this.minimizeShapeList} isToggleOn = {toggle}/>
        </div>
        <ShapeListContainer shapeList = {shapeList} isToggleOn = {toggle} removeShape = {this.removeShape}/>
      </div>
    );
  }
}
