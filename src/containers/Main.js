import React from 'react';
import {ShapeListData} from './../components/ShapeListData';
import {CanvasContainer} from './CanvasContainer';
import {ToolBarContainer} from './ToolBarContainer';

export class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      update: 1
    }

    this.updatePointData = this.updatePointData.bind(this);
  }

  updatePointData(){
    this.setState(
      {
        update: this.state.update+1
      }
    )

  }


  render(){
    return(
      <div>
        <ToolBarContainer update = {this.state.update} shapeData={this.props.shapeData}/>
        <CanvasContainer update = {this.updatePointData} shapeData={this.props.shapeData}/>
      </div>
    );

  }
}
