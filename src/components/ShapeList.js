import React from 'react';
import {ShapeContainer} from './../containers/ShapeContainer'

function removeFromList(list, id){
  const index = list.indexOf(id);
  if (index > -1) {
    list.splice(index, 1);
  }
}

function swap(list, id, up){
  const index= list.indexOf(id);
  const temp = list[index];
  if(up && index != 0){
    list[index] = list[index-1];
    list[index-1] = temp;
  }else if (!up && index != list.length-1) {
    list[index] = list[index+1];
    list[index+1]=temp;
  }
}

export class ShapeList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sl: ["Shape1"],
      len: 1,
    };

    this.props.shapeData.storeShapeData(this.state.sl);

    this.removeShape = this.removeShape.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.merge = this.merge.bind(this);
  }

  removeShape(e){
    const new_sl = this.state.sl;
    const shapeData = this.props.shapeData;

    removeFromList(new_sl, e.target.getAttribute("id"));
    this.setState({
      sl: new_sl
    });

    this.props.shapeData.storeShapeData(this.state.sl);

    const pointData = shapeData.getPointData();
    pointData.delete(shapeData.currShape);


  }

  moveUp(e){
    const new_sl = this.state.sl;
    const up = true;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.setState({
      sl: new_sl
    })
  }

  moveDown(e){
    const new_sl = this.state.sl;
    const up = false;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.setState({
      sl: new_sl
    })
  }

  merge(e){
    const new_sl = this.state.sl;
    const shapeData = this.props.shapeData;
    const pointData = this.props.shapeData.getPointData();
    const id = e.target.getAttribute("id");
    const index = new_sl.indexOf(id);
    let mergePoints;
    if(index < new_sl.length-1){
      mergePoints = pointData.get(id);
      //alert(mergePoints);
    }
  }

  render(){
    const shapeData = this.props.shapeData;
    const list = shapeData.getShapeData();
    const shapeList = list.map((s) =>
      <ShapeContainer
        shape = {s}
        key = {s}
        shapeData = {this.props.shapeData}
        removeShape = {this.removeShape}
        moveUp = {this.moveUp}
        moveDown = {this.moveDown}
        merge = {this.merge}
        />
    );


    return(
    <div>
      {shapeList}
    </div>
  );
  }
}
