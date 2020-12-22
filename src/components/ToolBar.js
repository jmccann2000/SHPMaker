import React from "react";
import {Toggle} from "../components/Toggle";
import {ShapeListContainer} from "../containers/ShapeListContainer";
import {ShapeList} from "./ShapeList";

export class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: true,
    };

    this.minimizeShapeList = this.minimizeShapeList.bind(this);
    this.addShape = this.addShape.bind(this);
  }

  //error
  addShape(){
    const shapeData = this.props.shapeData;
    const shapeList = shapeData.getShapeData();
    shapeData.incrementID();
    shapeList.push("Shape"+shapeData.id);
    shapeData.storeShapeData(shapeList);

    let shapePointMap=shapeData.getPointData();
    shapePointMap.set("Shape"+shapeData.id,[]);

    shapeData.storePointData(shapePointMap);

    shapeData.setCurrShape("Shape"+shapeData.id);

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
