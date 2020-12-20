export class ShapeListData {
  constructor(){
    this.shapeData={};
    this.pointData={};
  }

  storeShapeData(data){
    this.shapeData=data;
  }

  getShapeData(){
    return this.shapeData;
  }

  storePointData(data){
    this.pointData=data;
  }

  getPointData(){
    return this.pointData
  }
}
