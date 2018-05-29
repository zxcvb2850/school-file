import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/my"}>My</Link>
            </div>
        );
    }
}

export default connect()(App);
