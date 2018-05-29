import React, {Component} from 'react';
import {connect} from "react-redux";
import {getToken, storageToken, clearLocal} from "./redux/login/actions";

class App extends Component {
    render() {
        return (
            <div className="App">
                <p onClick={() => this.props.storageToken("login", "wang1234")}>储存token</p>
                <p onClick={() => this.props.getToken("login")}>------{this.props.token}</p>
                <p onClick={this.props.clearLocal}>清除所有localStorage</p>
            </div>
        );
    }
}

const mapStateProps = (state) => {
    console.log(state.loginStatus.token);
    return {
        token: state.loginStatus.token
    }
}

const mapDispatchProps = {
    getToken,
    storageToken,
    clearLocal,
};

export default connect(mapStateProps, mapDispatchProps)(App);
