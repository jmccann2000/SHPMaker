import React from 'react';
import ReactDOM from 'react-dom';
import {CanvasContainer} from './containers/CanvasContainer';
import ToolBarContainer from './containers/ToolBarContainer';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {shapes} from './reducers/index'

let store = createStore(shapes)

ReactDOM.render(
  <Provider store = {store}>
    <ToolBarContainer/>
    <CanvasContainer/>
  </Provider>,
  document.getElementById('root')
);
