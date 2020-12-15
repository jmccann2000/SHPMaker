import React from 'react';
import ReactDOM from 'react-dom';
import {CanvasContainer} from './containers/CanvasContainer';
import {ToolBarContainer} from './containers/ToolBarContainer';
import {ShapeListContainer} from './containers/ShapeListContainer';
import {ShapeContainer} from './containers/ShapeContainer';
import './index.css';

ReactDOM.render(
  <div>
    <ToolBarContainer />
    <ShapeListContainer>

    </ShapeListContainer>
    <CanvasContainer/>
  </div>,
  document.getElementById('root')
);
