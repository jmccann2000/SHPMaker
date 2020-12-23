import React from 'react';
import {ShapeListData} from './../components/ShapeListData';
import {CanvasContainer} from './CanvasContainer';
import {ToolBarContainer} from './ToolBarContainer';

export class Main extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      pointData: new Map(["Shape1"]),
      id: 1,
      currShape: "Shape1"
    }

    this.setPointData = this.setPointData.bind(this);
    this.setCurrShape = this.setCurrShape.bind(this);
    this.update = this.update.bind(this);
  }

  setPointData(shape, data){
    let temp = this.state.pointData;
    temp.set(shape, data);
    this.setState({
        pointData: temp
    });
  }

  setCurrShape(shape){
    this.setState({
        currShape: shape
    });
  }

  update(shape, data){
    this.setPointData(shape, data);
    this.setCurrShape(shape);
  }

  render(){
    return(
      <div>
        <ToolBarContainer update = {this.update}/>
        <CanvasContainer update = {this.update}/>
      </div>
    );

  }
}
