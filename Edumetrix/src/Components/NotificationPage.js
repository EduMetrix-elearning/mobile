import React, { Component } from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import style from '../Stylesheets/NotificationStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
class NotificationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            props: this.props.navigation.getParam('props')
        }
    }

    backHandle() {


        // this.props.props.navigation.goBack()
    }

    render() {
        let props = this.state.props


        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.container}>
                    <View style={style.headerContainer}>
                        <TouchableOpacity onPress={() => props.navigation.pop()}>
                            <View>
                                <Icon size={24} color={'white'} name={'md-arrow-round-back'} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: "white", fontSize: 17 }}>
                                Edumetrix Notifications
                            </Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            data.map((item, key) => (
                                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                                    <View style={style.notificationView}>
                                        <View style={style.subView}>
                                            <View>
                                                <View style={{ justifyContent: "center" }}>
                                                    <Image source={require("../Assets/kapil.jpg")} style={style.userImg} />
                                                </View>

                                            </View>

                                            <View style={{ marginLeft: 10, justifyContent: "center" }}>
                                                <View><Text style={style.nameText}>kapil asthana</Text></View>
                                                <View><Text style={style.locationText}>Kerala,India</Text></View>
                                            </View>
                                        </View>
                                        <View style={{ marginRight: 10, justifyContent: "center" }}>
                                            <View><Text style={style.locationText}>Tuesday, 4:00pm</Text></View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>

                </View>
            </SafeAreaView>

        )
    }
}

export default NotificationPage