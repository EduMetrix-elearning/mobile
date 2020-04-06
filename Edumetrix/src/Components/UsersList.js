import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import style from '../Stylesheets/ChatScreenStyle'


class UsersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userDetail: this.props.item
        }
    }


    render() {
        const { userDetail } = this.state

        console.log("user detail", userDetail);

        return (
            <View>
                <TouchableOpacity>
                    <View style={style.userView}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View>
                                <Image source={require("../Assets/kapil.jpg")} style={style.userImg} />
                            </View>

                            <View style={style.username}>
                                <Text style={{fontSize:15}}>
                                    {userDetail.name}
                                </Text>
                            </View>
                        </View>
                        <View style ={style.time}>
                            <Text style={{fontSize:12,color:"gray"}}>{userDetail.time}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

}

export default UsersList