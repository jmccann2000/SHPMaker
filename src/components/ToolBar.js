import React from "react";
import {Toggle} from "../containers/ToggleContainer";


export class ToolBar extends React.Component{
  render(){
    return (
      <div id='canvasToolbarWrapper'>
        <div id='toolsToolBar'>
          <button>Draw</button>
          <button>Erase</button>
        </div>
        <div id='shapesToolbar'>
          <button>Add Shape</button>
          <Toggle/>
        </div>
      </div>
    );
  }
}
