import React from "react";
import {Toggle} from "../components/Toggle";
import {ShapeListContainer} from "../containers/ShapeListContainer"
import {ShapeList} from "./ShapeList"

function removeFromList(list, id){
  const index = list.indexOf(id);
  if (index > -1) {
    list.splice(index, 1);
  }
}

function swap(list, id, up){
  const index= list.indexOf(id);
  const temp = list[index];
  if(up && index != 0){
    list[index] = list[index-1];
    list[index-1] = temp;
  }else if (!up && index != list.length-1) {
    list[index] = list[index+1];
    list[index+1]=temp;
  }
}

export class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      sl: ["Shape1"],
      len: 1,
      id: 1
    };
    this.addShape = this.addShape.bind(this);
    this.removeShape = this.removeShape.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.minimizeShapeList = this.minimizeShapeList.bind(this);
  }

  addShape(){
    const new_id = this.state.id+1;
    const new_sl = this.state.sl;
    new_sl.push("Shape"+new_id);
    this.setState({
      sl: new_sl,
      id: new_id
    });
  }

  removeShape(e){
    const new_sl = this.state.sl;
    removeFromList(new_sl, e.target.getAttribute("id"));
    this.setState({
      sl: new_sl
    });
  }

  moveUp(e){
    const new_sl = this.state.sl;
    const up = true;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.setState({
      sl: new_sl
    })
  }

  moveDown(e){
    const new_sl = this.state.sl;
    const up = false;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.setState({
      sl: new_sl
    })
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
          <button
            onClick = {this.addShape}>Add Shape
          </button>
          <Toggle minimizeShapeList = {this.minimizeShapeList} isToggleOn = {toggle}/>
        </div>
        <ShapeListContainer
          shapeList = {shapeList}
          isToggleOn = {toggle}
          removeShape = {this.removeShape}
          moveUp = {this.moveUp}
          moveDown = {this.moveDown}
          />
      </div>
    );
  }
}
