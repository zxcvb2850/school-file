/*
*  react 路由
* */
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import TabBar from "../component/TabBar";
import HomeIndex from "@/pages/Home/HomeIndex";
import MessageIndex from "@/pages/MessageIndex";
import FindIndex from "@/pages/FindIndex";
import MineIndex from "@/pages/MineIndex";

class BasicConfig extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <TabBar/>
                    <Switch>
                        <Route exact path='/home' component={HomeIndex}/>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <Route path="/message" component={MessageIndex}/>
                        <Route path="/find" component={FindIndex}/>
                        <Route path="/mine" component={MineIndex}/>
                        <Redirect to="/home"/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BasicConfig;