import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'
import style from '../Stylesheets/HomePageStyle'



class SuggetionsPost extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <View style = {style.suggestion}>
              <Image source={require('../Assets/kapil.jpg')} style={style.userImg} />
            </View>
        )
    }
}

export default SuggetionsPost