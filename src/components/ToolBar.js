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
      id: this.state.id+1
    });

    //REWRITE

    this.forceUpdate();
  }

  minimizeShapeList() {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  }

  render(){
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
          pointData = {this.props.pointData}
          currShape = {this.props.currShape}
          update = {this.props.update}
          />
      </div>
    );
  }
}
