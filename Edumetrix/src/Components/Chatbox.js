import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Header, Title, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import style from '../Stylesheets/ChatScreenStyle'

class Chatbox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }
    HandleBack = () => {
        this.props.navigation.goBack()
    }
    render() {

        const { navigation } = this.props
        var data = navigation.getParam('data')

        console.log("data in chatbox", this.props);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Header style={style.HeaderChatbox}>
                            <View style={style.profileHeaderView}>
                                <View>
                                    <Button transparent onPress={this.HandleBack}>
                                        <Icon size={24} color={'black'} name={'md-arrow-round-back'} />
                                    </Button>
                                </View>
                                <View>
                                    <Image source={require('../Assets/kapil.jpg')} style={style.chatboxProfileImg} />
                                </View>
                                <View style={style.profileName}>
                                    <Text>{data.name}</Text>
                                </View>
                            </View>

                            <View style={style.callingIconView}>

                                <View style={{ justifyContent: "center", marginRight: 25 }}>
                                    <TouchableOpacity>
                                        <Icon size={24} color={'black'} name={'ios-videocam'} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ justifyContent: "center" }}>
                                    <TouchableOpacity>
                                        <Icon size={24} color={'black'} name={'ios-call'} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {/* <Button transparent onPress={this.HandleBack}>
                                <Icon size={30} color={'black'} name={'md-arrow-round-back'} />
                            </Button>
                            <Title>{data.name}</Title> */}
                        </Header>
                    </View>

                    <View style ={{backgroundColor:"white",flex:1,marginTop:2}}>
                        <ScrollView>
                            <Text>messages display area</Text>
                        </ScrollView>
                    </View>

                </View>

                {/* footer area */}
                <View style={style.typeMessageView}>

                    <View style={style.messageView}>
                        <View style={{ justifyContent: "center",marginLeft:8 }}>
                        <FontAwesome5 size={24} color={'gray'} name={'smile'} />
                            </View>

                        <View style={style.inputText}>
                            <TextInput
                                placeholder={"Type Message here"}
                                multiline
                            />
                        </View>
                        <View style={{ justifyContent: "center", marginLeft: 2 }}>
                            <Entypo size={23} color={'gray'} name={'attachment'} />

                        </View>
                    </View>

                    <View style={{ justifyContent: "center", padding: 5 }}>
                        <TouchableOpacity>
                            <View>
                                <Icon size={24} color={'gray'} name={'md-send'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

export default Chatbox