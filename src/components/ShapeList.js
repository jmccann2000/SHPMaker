import React from 'react';
import ShapeContainer from './../containers/ShapeContainer'
import {connect} from 'react-redux';

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

class ShapeList extends React.Component {

  render(){
    let list = this.props.shapes;

    let shapeList = list.map((s) =>
      <ShapeContainer
        shape = {s}
        key = {s}
        />
    );

    return(
      <div id='ShapeList'>
        {shapeList}
      </div>
  );
  }
}

const mapStateToProps=(state)=>{
  return {
    shapes: state
  };
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeList);
