import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./common/styles/index.less"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
