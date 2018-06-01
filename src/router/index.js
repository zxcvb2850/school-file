/*
*  react 路由
* */
import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Restore, Favorite, LocationOn} from '@material-ui/icons';
import "./tab.less";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import My from "@/pages/My";

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class BasicConfig extends React.Component {
    state = {
        value: "HomeIndex",
        redirect: false
    };
    // 这一步是重点
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    
    handleChange = value => () => {
        console.log(value);
        this.setState({value});
    };
    
    render() {
        return (
            <Router>
                <div>
                    <div className="tab-wrapper">
                        <Link
                            to="/"
                            className="link"
                            style={{color: this.state.value === "HomeIndex" ? "F00" : "FF0"}}
                            onClick={this.handleChange("HomeIndex")}
                        >
                            <Restore/>
                            <p>首页</p>
                        </Link>
                        <Link to="/login" className="link" onClick={this.handleChange("FindIndex")}>
                            <Favorite/>
                            <p>发现</p>
                        </Link>
                        <Link to="/my" className="link" onClick={this.handleChange("MineIndex")}>
                            <LocationOn/>
                            <p>我的</p>
                        </Link>
                    </div>
                    
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <Route path="/login" component={Login}/>
                        <Route path="/my" component={My}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BasicConfig;