import React from 'react';
import image from './../icons/test.png';
import {connect} from 'react-redux';
import {ShapeIcon} from './../components/ShapeIcon';
import {removeShape} from '../actions';

class ShapeContainer extends React.Component{

  render(){
    let currShape=this.props.shape;

    return (
      <div className='shapeWrapper'>
        <p>{currShape}</p>
        <div className = 'smallButton'>
          <button onClick = {this.props.removeShape} id = {currShape}>X</button>
          <button onClick = {this.props.moveUp} id = {currShape}>U</button>
          <button onClick = {this.props.moveDown} id = {currShape}>D</button>
          <button onClick = {this.props.merge} id = {currShape}>Merge</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    shapes: state
  };
}

const mapDispatchToProps =(currShape) =>{removeShape(currShape)}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeContainer);
