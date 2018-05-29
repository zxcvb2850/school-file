/*
*  react 路由
* */
import React, {Component} from "react";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";

/*
* 路由文件
* */
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import My from "@/pages/My";

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/my" component={My}/>
                    <Redirect to="/"/>
                </Switch>
            </BrowserRouter>
        )
    }
}