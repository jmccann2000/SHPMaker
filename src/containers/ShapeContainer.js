import React from 'react';
import styles from './../styles.modules.css'

export class ShapeContainer extends React.Component{
  render(){

    return (
      <div className='shapeWrapper'>
        <div className = 'shapeButton'>
          <button> {this.props.shape} </button>
        </div>
        <div className = 'smallButton'>
          <button>X</button>
          <button>U</button>
          <button>D</button>
        </div>
      </div>
    )
  }
}
