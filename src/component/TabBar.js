import React from 'react';
import {Link} from "react-router-dom";

export default class IconTabs extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">首页</Link>
                </div>
                <div>
                    <Link to="/login">发现</Link>
                </div>
                <div>
                    <Link to="/my">我的</Link>
                </div>
            </div>
        );
    }
}