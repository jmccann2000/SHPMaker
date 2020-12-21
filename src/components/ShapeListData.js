export class ShapeListData {

  constructor(){
    this.shapeData=["Shape"+1];
    this.pointData = new Map([this.shapeData]);
    this.pointData.set("Shape1", ["ASf"]);
    this.id = 1;
    this.currShape = "Shape1";
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
    return this.pointData.get(this.currShape);
  }

  incrementID(){
    this.id = this.id + 1;
  }

  getCurrShape(){
    return this.currShape;
  }

  setCurrShape(id){
    this.currShape = id;
  }
}
