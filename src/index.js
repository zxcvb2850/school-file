import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import Route from "./router/";
import "./common/styles/index.less"
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(<Provider store={store}><Component/></Provider>, document.getElementById('root'));
}
render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}

registerServiceWorker();
