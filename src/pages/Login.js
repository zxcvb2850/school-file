import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };
    
    constructor({match}) {
        super();
        console.log(match);
        this.state = {
            match,
        }
    }
    
    onChange = () => {
        this.context.router.history.push("/");
    };
    
    
    render() {
        return (
            <div>
                <p onClick={this.onChange.bind()}>Login</p>
            </div>
        )
    }
};