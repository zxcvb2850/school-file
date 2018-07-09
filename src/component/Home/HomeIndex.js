/*
*   首页
* */
import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";


export default class HomeIndex extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>我是HomeIndex</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});