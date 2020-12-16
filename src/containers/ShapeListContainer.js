import React from 'react';
import {ShapeList} from './../components/ShapeList'

export class ShapeListContainer extends React.Component{
  render(){
    return (
      <div>
        <div id='shapeListWrapper'>
          <ShapeList shapes = {["shape1"]} />
        </div>
      </div>
    )
  }
}
