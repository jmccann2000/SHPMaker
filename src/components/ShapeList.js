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

    this.removeShape = this.removeShape.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.merge = this.merge.bind(this);
  }


  removeShape(e){
    const shapeData = this.props.pointData.keys();
    const currShape = e.target.getAttribute("id");
    const pointData = this.props.pointData;

    if(shapeData.length  > 1){
      removeFromList(shapeData, currShape);
      pointData.delete(shapeData.currShape);
    }

    this.props.update(currShape, pointData);

  }

  //FIX
  moveUp(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();
    const up = true;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.forceUpdate();
  }

  //FIX
  moveDown(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();
    const up = false;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.forceUpdate();
  }

  //FINISH
  merge(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();
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
    const pointData = this.props.pointData;
    const list = Array.from(pointData.keys());;
    alert(list);

    const shapeList = list.map((s) =>
      <ShapeContainer
        shape = {s}
        key = {s}
        removeShape = {this.removeShape}
        moveUp = {this.moveUp}
        moveDown = {this.moveDown}
        merge = {this.merge}

        pointData = {this.props.pointData}
        currShape = {this.props.currShape}
        update = {this.props.update}
        />
    );


    return(
    <div>
      {shapeList}
    </div>
  );
  }
}
