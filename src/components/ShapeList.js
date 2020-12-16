import React from 'react';
import {ShapeContainer} from './../containers/ShapeContainer'


export class ShapeList extends React.Component {

  render(){
    const shapes = this.props.shapes;

    const shapeList = shapes.map((s) =>
      <ShapeContainer shape = {s}/>
    );

    return(
    <div>
      {shapeList}
    </div>
  )
  }
}
