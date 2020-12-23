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

  //error
  removeShape(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();

    if(shapeData.getShapeData().length  > 1){
      removeFromList(new_sl, e.target.getAttribute("id"));

      this.props.shapeData.storeShapeData(new_sl);

      shapeData.setCurrShape(e.target.getAttribute("id"));

      const pointData = shapeData.getPointData();

      pointData.delete(shapeData.currShape);
    }

  }

  moveUp(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();
    const up = true;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.forceUpdate();
  }

  moveDown(e){
    const shapeData = this.props.shapeData;
    const new_sl = shapeData.getShapeData();
    const up = false;
    const id = e.target.getAttribute("id");
    swap(new_sl, id, up);
    this.forceUpdate();
  }

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
