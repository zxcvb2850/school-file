import React from 'react';
import {NavLink} from "react-router-dom";
import "./tabbar.less";

export default class IconTabs extends React.Component {
    render() {
        return (
            <div className="tab-wrapper">
                <NavLink
                    to="/home"
                    className="link"
                >
                    <p><Icon type="arrows-alt"/>首页</p>
                </NavLink>
                <NavLink
                    to="/find"
                    className="link"
                >
                    <p>发现</p>
                </NavLink>
                <NavLink to="/my" className="link">
                    <p>我的</p>
                </NavLink>
            </div>
        );
    }
}