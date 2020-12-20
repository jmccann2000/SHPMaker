import React from 'react';
import ReactDOM from 'react-dom';
import {CanvasContainer} from './containers/CanvasContainer';
import {ToolBarContainer} from './containers/ToolBarContainer';
import {ShapeListContainer} from './containers/ShapeListContainer';
import {ShapeContainer} from './containers/ShapeContainer';
import {ShapeListData} from './components/ShapeListData';

import './index.css';

const shapeData = new ShapeListData();

ReactDOM.render(
  <div>
    <ToolBarContainer shapeData={shapeData}/>
    <CanvasContainer shapeData={shapeData}/>
  </div>,
  document.getElementById('root')
);
