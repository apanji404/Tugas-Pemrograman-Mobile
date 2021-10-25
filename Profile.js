import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{ fontSize: 20 }}>
                    Hello {this.props.navigation.state.params.P1} nice to meet you</Text>
                <Image source={require('./assets/chad2.png')} />
            </View>
        )
    }
}
const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lavender",
        alignItems: "center",
        justifyContent: "center"
    },
})