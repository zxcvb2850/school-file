import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import {List} from 'antd-mobile';
import "./style.less";

export default class HomeIndex extends Component {
    state = {
        showScreen: false,
        items: [
            {id: 1, text: 'Buy eggs'},
            {id: 2, text: 'Pay bills'},
            {id: 3, text: 'Invite friends over'},
            {id: 4, text: 'Fix the TV'},
        ],
    };
    onOpenChange = () => {
        this.setState({showScreen: !this.state.showScreen})
    };

    render() {
        return (
            <div className="home-wrapper">
                <header className="home-header">
                    <div className="home-location">
                        <p>我的学校<span className="icon file-jiantou"></span></p>
                    </div>
                    <div className="home-screen" onClick={this.onOpenChange}>
                        <p>筛选 <span className="icon file-jiantou"></span></p>
                    </div>
                </header>
                <div className="screen-wrapper" onClick={() => {
                    this.setState({showScreen: false})
                }}>
                    <CSSTransition
                        in={this.state.showScreen}
                        timeout={500}
                        classNames="screen fade"
                        unmountOnExit
                    >
                        <div className="fade">⭐</div>
                    </CSSTransition>
                </div>
            </div>
        );
    }
}
