export class ShapeListData {

  constructor(){
    this.shapeData=["Shape"+1];
    this.pointData = this.shapeData.map((key) =>
      []
    );
    this.id = 1;
  }

  storeShapeData(data){
    this.shapeData=data;
    console.log(this.shapeData);
  }

  getShapeData(){
    return this.shapeData;
  }

  storePointData(data){
    this.pointData=data;
  }

  getPointData(){
    return this.pointData;
  }

  incrementID(){
    this.id = this.id + 1;
  }
}
