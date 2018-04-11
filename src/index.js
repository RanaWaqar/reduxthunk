/**
* from node_modules imports
**/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';



/***
* from project file imports 
**/

import RootComponent from './containers/requestFormContainer';
import Reducers from './reducers'; 
import registerServiceWorker from './registerServiceWorker';

const middlerware = applyMiddleware(promiseMiddleware(), logger, thunkMiddleware);
const store = createStore(Reducers, middlerware);



ReactDOM.render(<Provider store={store}><RootComponent/></Provider>, document.getElementById('root'));
registerServiceWorker();
