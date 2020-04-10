import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import style from '../Stylesheets/LoginStylesheet'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    forgotPswrdScreen = (event) => {
        this.props.navigation.navigate("ForgotPassword")

    }

    signUpHandle = (event)=>{
        this.props.navigation.navigate("SignUp")
    }

    signInHandle = (event)=>{

        this.props.navigation.navigate("DrawerComponent")
       
    }

    render() {
        return (
            <SafeAreaView style = {{flex:1,margin:1}}>
            <View style={style.loginContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginBottom:100}}>

                        <View style={style.imageView}>
                            <Image source={require('../Assets/logoCoin.png')} style={style.loginCoin} />
                        </View>

                        <View style={style.titleView}>
                            <Text style={style.title}>EDUMETRIX</Text>
                        </View>

                        <View style={{ marginTop: 20 }}>

                            <View style={style.emailInput}>

                                <View style={style.emailIcon}>
                                    <Icon name="user" color={"gray"} size={20} />
                                </View>
                                <View style={style.email}>
                                    <TextInput
                                        placeholder='email'
                                        keyboardAppearance="light"
                                        keyboardType="email-address"
                                        style={style.input}
                                    />
                                </View>
                            </View>
                            <View style={style.emailInput}>

                                <View style={style.emailIcon}>
                                    <Icon name="lock" color={"gray"} size={20} />
                                </View>
                                <View style={style.email}>
                                    <TextInput
                                        placeholder='Password'
                                        keyboardAppearance="light"
                                        keyboardType="name-phone-pad"
                                        secureTextEntry={true}
                                        style={style.input}
                                    />
                                </View>

                            </View>
                        </View>

                        <View style={style.btnContainer}>

                            <View style={style.signInBtnView}>
                                <TouchableOpacity 
                                onPress = {event=>this.signInHandle(event)}
                                style={style.signUpTouch}>
                                    <Text style={{ color: "white" }}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={style.signupBtnView}>
                                <TouchableOpacity 
                                onPress = {event=>this.signUpHandle(event)}
                                style={style.signUpTouch}>
                                    <Text style={{ color: "white" }}>Not yet Account? Sign up!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.forgotView}>
                            <TouchableOpacity onPress={event => this.forgotPswrdScreen(event)}>
                                <Text style={style.forgotpswrd}>
                                    Forgot Password
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.conditionsView}>
                        <Text>Terms</Text>
                    </View>
                </ScrollView>
            </View>
            </SafeAreaView>

        )
    }
}

export default Login

