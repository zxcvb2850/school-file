import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Toast} from "antd-mobile-rn";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button onClick={() => {
                    Toast.info("我是Toast", 2)
                }}>1234</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
