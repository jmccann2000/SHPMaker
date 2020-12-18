import React from 'react';
import {ShapeContainer} from './../containers/ShapeContainer'


export class ShapeList extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    const removeShape = this.props.removeShape;

    const list = this.props.list;
    const shapeList = list.map((s) =>
      <ShapeContainer shape = {s} removeShape = {removeShape}/>
    );


    return(
    <div>
      {shapeList}
    </div>
  )
  }
}
