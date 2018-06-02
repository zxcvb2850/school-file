import React, {Component} from "react";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import {List} from 'antd-mobile';
import "./style.less";

export default class HomeIndex extends Component {
    state = {
        showScreen: false,
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({showScreen: !this.state.showScreen});
    }
    
    render() {
        /*const sidebar = (
            <List>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                    return (
                        <List.Item
                            key={index}
                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                            onClick={() => {
                                console.log(i);
                            }}
                        >
                            Category{index}
                        </List.Item>
                    );
                })}
            </List>
        );*/
        
        return (
            <div className="home-wrapper">
                <header className="home-header">
                    <div className="home-location" onClick={() => {
                        console.log("选择学校")
                    }}>
                        <p>我的学校<span className="icon file-jiantou"></span></p>
                    </div>
                    <div className="home-screen" onClick={this.onOpenChange}>
                        <p>筛选 <span className="icon file-jiantou"></span></p>
                    </div>
                </header>
                {
                    this.state.showScreen ?
                        <div
                            className="screen-wrapper" style={{height: document.documentElement.clientHeight}}
                            onClick={this.onOpenChange}
                        >
                            <div className="screen">
                                <p>我是筛选</p>
                            </div>
                        </div>
                        : null
                }
            </div>
        );
    }
}
