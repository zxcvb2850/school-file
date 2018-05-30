/*
*  react 路由
* */

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import My from "@/pages/My";

const BasicConfig = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/my" component={My}/>
            </Switch>
        </div>
    </Router>
);

export default BasicConfig