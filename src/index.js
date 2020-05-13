import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CanvasContainer} from './containers/CanvasContainer';
import {ToolBarContainer} from './containers/ToolBarContainer';
import './index.css';

ReactDOM.render(
  <div>
  <ToolBarContainer />
  <CanvasContainer />
  </div>,
  document.getElementById('root')
);
