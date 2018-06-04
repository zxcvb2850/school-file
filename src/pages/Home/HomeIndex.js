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
        show: false
    }
    onOpenChange = (...args) => {
        /* console.log(args);
         this.setState({showScreen: !this.state.showScreen});*/
    }
    
    render() {
        return (
            <div className="home-wrapper">
                <header className="home-header">
                    <div className="home-location" onClick={() => {
                        this.setState({show: !this.state.show})
                    }}>
                        <p>我的学校<span className="icon file-jiantou"></span></p>
                    </div>
                    <div className="home-screen" onClick={this.onOpenChange}>
                        <p>筛选 <span className="icon file-jiantou"></span></p>
                    </div>
                </header>
                {/*{
                    this.state.showScreen ?
                        <TransitionGroup
                            onClick={this.onOpenChange}
                        >
                            <CSSTransition
                                timeout={500}
                                classNames="screen-wrapper fade" style={{height: document.documentElement.clientHeight}}
                            >
                                <div className="screen">
                                    <p>我是筛选</p>
                                </div>
                            </CSSTransition>
                        </TransitionGroup> : null
                }*/}
                <TransitionGroup className="screen-wrapper" style={{marginTop: 60}}>
                    {
                        this.state.show ?
                            <CSSTransition
                                timeout={5000}
                                classNames="fade"
                            >
                                <div>
                                    呜啦啦啦啦啦啦啦啦啦啦啦啦啦
                                </div>
                            </CSSTransition> : null
                    }
                </TransitionGroup>
            </div>
        );
    }
}
