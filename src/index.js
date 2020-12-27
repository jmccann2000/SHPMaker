import React from 'react';
import ReactDOM from 'react-dom';
import {CanvasContainer} from './containers/CanvasContainer';
import {ToolBarContainer} from './containers/ToolBarContainer';
import {ShapeListContainer} from './containers/ShapeListContainer';
import {ShapeContainer} from './containers/ShapeContainer';
import {ShapeListData} from './components/ShapeListData';
import {Main} from './containers/Main';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store = {store}>
    <Main shapeData = {shapeData} />
  </Provider>,
  document.getElementById('root')
);
