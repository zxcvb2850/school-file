import React, {Component} from 'react';
import {connect} from "react-redux";

import Router from "./router/"

/*import TabBar from "./component/TabBar";*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router/>
            </div>
        );
    }
}

export default connect()(App);
