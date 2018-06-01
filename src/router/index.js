/*
*  react 路由
* */
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import TabBar from "../component/TabBar";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import My from "@/pages/My";

class BasicConfig extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <TabBar/>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <Route path="/find" component={Login}/>
                        <Route path="/my" component={My}/>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BasicConfig;