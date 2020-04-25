import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import ChatBot from 'react-native-chatbot';

const steps = [
    {
        id: '1',
        message: "hello how are you?",
        trigger: '2'
    },
    {
        id: '2',
        message: "i am fine",
        end: true
    }
]
class CustomChatBot extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ChatBot steps={steps}
                    // botAvatar= {require('../Assets/logoCoin.png')}
                   
                // botBubbleColor={"yellow"}
                />

            </View>
        )
    }
}
export default CustomChatBot