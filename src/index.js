import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Drop from './Drop';
import Svg from './svg';
import MyRouter from  './myrouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyRouter />, document.getElementById('myrouter'));
ReactDOM.render(<Drop />, document.getElementById('drop'));
ReactDOM.render(<Svg />, document.getElementById('svg'));
registerServiceWorker();
