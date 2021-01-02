import React from 'react';
import {addShape} from '../actions';
import {connect} from 'react-redux';
import ToolBar from '../components/ToolBar';

class ToolBarContainer extends React.Component{

  render(){
    return (
      <div className='toolbar' >
        <ToolBar/>
      </div>
  );
  }
}

const mapStateToProps=(state)=>{
  return {
    shapes: state
  };
}

const mapDispatchToProps = {addShape}


export default connect(mapStateToProps, mapDispatchToProps)(ToolBarContainer)
