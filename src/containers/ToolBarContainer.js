import React from 'react';
import {ToolBar} from '../components/ToolBar';

export class ToolBarContainer extends React.Component{

  render(){
    return (
      <div class='toolbar' >
        <ToolBar
          pointData = {this.props.pointData}
          currShape = {this.props.currShape}
          update = {this.props.update}
        />
      </div>
  );
  }
}
