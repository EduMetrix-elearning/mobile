import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import style from '../Stylesheets/LoginStylesheet'
import Spinner from 'react-native-spinkit'
import { View, AsyncStorage, Text, Image, ActivityIndicator } from 'react-native'

class SplashScreen extends Component {

    componentDidMount() {
        // AsyncStorage.getItem
        this.goToLogin()
    }

    goToLogin() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1000)
    }
    render() {
        return (

            <View style={style.spashViewContainer}>
                
                <View style={style.spashImage}>
                    <View style={style.subContainer}>
                        <Image source={require('../Assets/logoCoin.png')} style={style.loginCoin} />
                    </View>

                </View>
                <View>
                    <Spinner color ={"#237F89"} size={40} type={"ThreeBounce"}/>
                </View>
                <View>
                    <Text>Please wait...</Text>
                </View>
            </View>



        )
    }
}

export default SplashScreen