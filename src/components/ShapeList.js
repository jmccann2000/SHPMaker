import React from 'react';
import {ShapeContainer} from './../containers/ShapeContainer'


export class ShapeList extends React.Component {

  constructor(props){
    super(props);
  }


  render(){
    const list = this.props.list;
    const shapeList = list.map((s) =>
      <ShapeContainer shape = {s}/>
    );


    return(
    <div>
      {shapeList}
    </div>
  )
  }
}
