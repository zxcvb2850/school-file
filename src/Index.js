import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StyleCommon from "./common/StyleCommon";
import {Button, Toast} from "antd-mobile-rn";
import {Scene, Stack, Router, Tabs} from "react-native-router-flux"
import TabBar from "./component/TabBar";
import HomeIndex from "./component/Home/HomeIndex";

export default class Index extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.select_text}>我的学校^</Text>
                </View>
                <Router>
                    <Stack key="root">
                        <Tabs
                            key="tabbar"
                            swipeEnabled
                            wrap={false}
                            // 是否显示标签栏文字
                            showLabel={true}
                            tabBarStyle={{backgroundColor: "#000"}}
                            //tab选中的颜色
                            activeBackgroundColor={StyleCommon.GrayColor}
                            activeTintColor={StyleCommon.MainColor}
                            //tab没选中的颜色
                            inactiveBackgroundColor={StyleCommon.GrayColor}
                            inactiveTintColor={StyleCommon.BlackColor}
                            tabStyle={{}}
                            tabBarPosition="bottom"
                            labelStyle={{fontSize: StyleCommon.TabBarFontSize}}
                            lazy={true}
                            tabBarOnPress={(e)=>{
                                console.log(e)
                            }}
                        >
                            <Scene
                                key="tab"
                                component={TabBar}
                                title="切换"
                            />
                            
                            <Scene
                                key="home"
                                component={HomeIndex}
                                title="首页"
                            />
                        </Tabs>
                    </Stack>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: StyleCommon.HomeTabHeight,
        backgroundColor: StyleCommon.MainColor,
    },
    select_text: {
        lineHeight: StyleCommon.HomeTabHeight,
        color: StyleCommon.WhiteColor,
        fontSize: StyleCommon.MainFontSize,
        textAlign: "center",
    }
});
