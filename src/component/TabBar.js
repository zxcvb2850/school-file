import React from 'react';
import {NavLink} from "react-router-dom";
import "./tabbar.less";

export default class IconTabs extends React.Component {
    render() {
        return (
            <div className="tab-wrapper">
                <NavLink
                    to="/home"
                    className="tab-item"
                >
                    <p><span className="icon">&#xe610;</span>首页</p>
                </NavLink>
                <NavLink
                    to="/message"
                    className="tab-item"
                >
                    <p><span className="icon">&#xe604;</span>消息</p>
                </NavLink>
                <NavLink
                    to="/find"
                    className="tab-item"
                >
                    <p><span className="icon">&#xe603;</span>发现</p>
                </NavLink>
                <NavLink to="/mine" className="tab-item">
                    <p>
                        <span className="icon">&#xe600;</span>
                        <span className="tab-item-text">我的</span>
                    </p>
                </NavLink>
            </div>
        );
    }
}