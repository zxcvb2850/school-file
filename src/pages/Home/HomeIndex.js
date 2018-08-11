import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {List, Tabs, Badge, ListView} from 'antd-mobile';
import "./style.less";

const tabs = [
    {title: <Badge text={'3'}>First Tab</Badge>},
    {title: <Badge text={'20'}>Second Tab</Badge>},
];

export default class HomeIndex extends Component {
    state = {
        showScreen: false,
        items: [
            {id: 1, text: 'Buy eggs'},
            {id: 2, text: 'Pay bills'},
            {id: 3, text: 'Invite friends over'},
            {id: 4, text: 'Fix the TV'},
        ],
        data: [
            {
                img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                title: 'Meet hotel',
                des: '不是所有的兼职汪都需要风吹日晒',
            },
            {
                img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                title: 'McDonald\'s invites you',
                des: '不是所有的兼职汪都需要风吹日晒',
            },
            {
                img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                title: 'Eat the week',
                des: '不是所有的兼职汪都需要风吹日晒',
            },
        ],
        isLoading: false
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
                <div className="content">
                    <Tabs tabs={tabs}
                          initialPage={1}
                          onChange={(tab, index) => {
                              console.log('onChange', index, tab);
                          }}
                          onTabClick={(tab, index) => {
                              console.log('onTabClick', index, tab);
                          }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '150px',
                            backgroundColor: '#fff'
                        }}>
                            Content of first tab
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '150px',
                            backgroundColor: '#fff'
                        }}>
                            <ListView
                                className="am-list sticky-list"
                                dataSource={this.state.data}
                                useBodyScroll
                                renderSectionWrapper={() => (
                                    <div>
                                        <p>标题</p>
                                    </div>
                                )}
                                renderHeader={() => <span>header</span>}
                                renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
                                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                </div>)}
                            />
                        </div>
                    </Tabs>
                </div>
            </div>
        );
    }
}
