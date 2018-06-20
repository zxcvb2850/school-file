/*
*  TabBar 设置
*  UI
* */

import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";

export default class TabBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>我是TabBar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});