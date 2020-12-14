import React from 'react';

export class ToolBarContainer extends React.Component{
  render(){
    return (
    <div id='canvasToolbarWrapper'>
      <div id='toolsToolBar'>
        <button>Draw</button>
        <button>Erase</button>
      </div>
      <div id='shapesToolbar'>
        <button>Add Shape</button>
        <button>Minimize</button>
      </div>
    </div>
  )
  }
}
