import React from 'react';
import {ToolBar} from '../components/ToolBar';

export class ToolBarContainer extends React.Component{
  render(){
    return (
      <div className='toolbar'>
        <ToolBar/>
      </div>
  );
  }
}
