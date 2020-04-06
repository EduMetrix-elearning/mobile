import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import style from '../Stylesheets/FollowingPostStyle'

class FollowingPost extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={style.followingPostContainer}>
                <View>
                    <Image source={require('../Assets/kapil.jpg')} style={style.postImg} />
                </View>
                <View style={{width:"70%",marginLeft:2}}>
                    <Text style={{ textAlign: "justify", fontSize: 10 }}>Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                   
                         </Text>
                </View>


            </View>
        )
    }
}

export default FollowingPost
