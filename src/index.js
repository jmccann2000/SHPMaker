import React from 'react';
import ReactDOM from 'react-dom';
import {CanvasContainer} from './containers/CanvasContainer';
import {ToolBarContainer} from './containers/ToolBarContainer';
import {ShapeListContainer} from './containers/ShapeListContainer';
import {ShapeContainer} from './containers/ShapeContainer';
import {ShapeListData} from './components/ShapeListData';
import {Main} from './containers/Main';

import './index.css';

var shapeData = new ShapeListData();

ReactDOM.render(
  <div>
    <Main shapeData = {shapeData} />
  </div>,
  document.getElementById('root')
);
