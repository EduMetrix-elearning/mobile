import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import Drawer from './Drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/Ionicons'
import style from '../Stylesheets/HomePageStyle'
import Posts from './Posts'
import Footer from './Footer'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isCreatePost: false
        }
    }


    getData = (data) => {
        console.log("get data", data);
        this.setState({
            isCreatePost: data
        })
    }

    render() {

        return (
            <SafeAreaView style={style.homeSafeArea}>

                <Drawer getData={this.getData} props={this.props} />

                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* create view actions ... */}
                    {(this.state.isCreatePost) ?
                        <View>
                            <View style={style.createView}>
                                <TouchableOpacity>
                                <View>
                                    <Text>create view</Text>
                                </View>
                                </TouchableOpacity>
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
                                <View style={style.sendBtn}>
                                    <Image source={require('../Assets/send.jpg')} style={style.sendImg} />
                                </View>
                            </View>
                        </View>

                        : null}

                    <Posts />
                    <Posts />
                    <Posts />



                </ScrollView>

                <View style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <View>
                        <TouchableOpacity>
                            <Icon name="home" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <MaterialIcon name="ios-search" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Icon name="user-o" size={23} color={"black"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home