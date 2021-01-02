import React from "react";
import {Toggle} from "../components/Toggle";
import {ShapeListContainer} from "../containers/ShapeListContainer";
import {ShapeList} from "./ShapeList";
import {connect} from 'react-redux';
import {addShape} from '../actions';

class ToolBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      toggle: true,
    };

    this.minimizeShapeList = this.minimizeShapeList.bind(this);
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
            onClick = {this.props.addShape}>Add Shape
          </button>
          <Toggle minimizeShapeList = {this.minimizeShapeList} isToggleOn = {toggle}/>
        </div>
        <ShapeListContainer
          isToggleOn={toggle}
        />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    shapes: state
  };
}

const mapDispatchToProps = {addShape}

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
