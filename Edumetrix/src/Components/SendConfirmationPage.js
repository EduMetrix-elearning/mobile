import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


class SendConfirmationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const getValue = this.props.navigation.getParam('data')
        console.log("data in confirm", getValue.value);

        return (
            <View>
                <TouchableOpacity>
                    <Text>{getValue.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SendConfirmationPage