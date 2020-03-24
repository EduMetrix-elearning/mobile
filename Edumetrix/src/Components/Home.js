import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import style from '../Stylesheets/HomePageStyle'
import Posts from './Posts'
class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <SafeAreaView style={style.homeSafeArea}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* create view actions ... */}
                    <View style={style.createView}>
                        <View>
                            <Text>create view</Text>
                        </View>

                        <Text>create view</Text>
                        <Text>create view</Text>
                    </View>
                    {/* user post view area where user input details about post..... */}
                    <View>
                        <View style={style.userInputPostArea}>
                            <View style={style.imgview}>
                                <Image source={require('../Assets/kapil.jpg')} style={style.userImg} />
                            </View>
                            {/* user input area */}
                            <View style={style.inputArea}>

                                <TextInput
                                    placeholder="Write something Here..."
                                    keyboardAppearance="light"
                                    keyboardType="default"
                                    multiline
                                />
                            </View>
                        </View>
                        {/* send button */}
                        <View style = {style.sendBtn}> 
                        <Image source={require('../Assets/send.jpg')} style={style.sendImg} />
                        </View>

                        <View>

                        </View>
                    </View>
                    <Posts/>
                    <Posts/>
                    <Posts/>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Home