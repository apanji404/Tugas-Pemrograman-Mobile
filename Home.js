import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, ScrollView } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { Input: '' }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello My Name is Giga Chad</Text>
                    <Image source={require('./assets/chad.png')} />
                    <TextInput
                        style={styles.input}
                        onChangeText={Input => this.setState({ Input })}
                        placeholder="What is your name?" />
                    <Button
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Profile', { P1: this.state.Input })}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lavender",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})