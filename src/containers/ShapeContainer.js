import React from 'react';

export class ShapeContainer extends React.Component{
  render(){
    return (
      <div className='shapeWrapper'>
        <p>{this.props.shape}</p>
      </div>
    )
  }
}
