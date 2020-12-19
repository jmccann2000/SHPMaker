import React from 'react';
import {ShapeContainer} from './../containers/ShapeContainer'


export class ShapeList extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    const removeShape = this.props.removeShape;
    const moveUp = this.props.moveUp;
    const moveDown = this.props.moveDown;

    const list = this.props.list;

    const shapeList = list.map((s) =>
      <ShapeContainer
        shape = {s}
        key = {s}
        removeShape = {removeShape}
        moveUp = {moveUp}
        moveDown = {moveDown}
        />
    );


    return(
    <div>
      {shapeList}
    </div>
  )
  }
}
