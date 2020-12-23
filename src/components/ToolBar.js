import React from "react";
import {Toggle} from "../components/Toggle";
import {ShapeListContainer} from "../containers/ShapeListContainer";
import {ShapeList} from "./ShapeList";

export class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      id: 1
    };

    this.minimizeShapeList = this.minimizeShapeList.bind(this);
    this.addShape = this.addShape.bind(this);
  }

  //error
  addShape(){
    this.setState({
      id: id+1;
    });


    this.forceUpdate();
  }

  minimizeShapeList() {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render(){
    const shapeData = this.props.shapeData;
    const toggle = this.state.toggle;

    return (
      <div id="canvasToolbarWrapper">
        <div id="toolsToolBar">
          <button>Draw</button>
          <button>Erase</button>
        </div>
        <div id="shapesToolbar">
          <button
            onClick = {this.addShape}>Add Shape
          </button>
          <Toggle minimizeShapeList = {this.minimizeShapeList} isToggleOn = {toggle}/>
        </div>
        <ShapeListContainer
          shapeData = {shapeData}
          isToggleOn = {toggle}
          update = {this.props.update}
          />
      </div>
    );
  }
}
