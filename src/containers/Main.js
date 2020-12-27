import React from 'react';
import {ShapeListData} from './../components/ShapeListData';
import {CanvasContainer} from './CanvasContainer';
import {ToolBarContainer} from './ToolBarContainer';

export class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pointData: new Map([["Shape1"]]),
      currShape: "Shape1"
    }

    this.setPointData = this.setPointData.bind(this);
    this.setCurrShape = this.setCurrShape.bind(this);
    this.update = this.update.bind(this);
  }

  setPointData(data){

    this.setState({
        pointData: data
    });
  }

  setCurrShape(shape){
    this.setState({
        currShape: shape
    });
  }

  update(shape, data){
    this.setPointData(data);
    this.setCurrShape(shape);
  }

  render(){
    return(
      <div>
        <ToolBarContainer
          pointData = {this.state.pointData}
          currShape = {this.state.currShape}
          update = {this.update}
        />
        <CanvasContainer
          pointData = {this.state.pointData}
          currShape = {this.state.currShape}
          update = {this.update}
        />
      </div>
    );

  }
}
