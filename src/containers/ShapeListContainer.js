import React from 'react';

export class ShapeListContainer extends React.Component{
  render(){
    return (
      <div>
        <div id='shapeListWrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
