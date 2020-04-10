import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from '../Stylesheets/ChatScreenStyle'


class UsersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userDetail: ''
        }
    }


    userHandle = async(event) => {

        await this.setState({
            userDetail:this.props.item
        })
        console.log("users details",this.state.userDetail);

        this.props.props.navigation.navigate('Chatbox',{data:this.state.userDetail})
    }

    render() {
      
        const item = this.props.item
        return (
            <View>
                <TouchableOpacity onPress={event=>this.userHandle(event)}>
                    <View style={style.userView}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View>
                                <Image source={require("../Assets/kapil.jpg")} style={style.userImg} />
                            </View>

                            <View style={style.username}>
                                <Text style={{ fontSize: 15 }}>
                                    {item.name}
                                </Text>
                            </View>
                        </View>
                        <View style={style.time}>
                            <Text style={{ fontSize: 12, color: "gray" }}>{item.time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

}

export default UsersList