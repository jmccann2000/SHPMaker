import React from 'react';
import {ToolBar} from '../components/ToolBar';

export class ToolBarContainer extends React.Component{

  render(){

    return (
      <div class='toolbar' >
        <ToolBar  shapeData={this.props.shapeData}/>
      </div>
  );
  }
}
