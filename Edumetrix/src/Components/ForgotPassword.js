import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import style from '../Stylesheets/LoginStylesheet'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'


class ForgotPassword extends Component {

   constructor(props){
       super(props)

       this.state={

       }
   }

    forgotPswrdScreen=(event)=>{
        this.props.navigation.navigate("ForgotPassword")
        
    }
   
    render() {
        return (

            <View style={style.loginContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginBottom:240}}>

                <View style={style.imageView}>
                    <Image source={require('../Assets/logoCoin.png')} style={style.loginCoin} />
                </View>

                <View style={style.titleView}>
                    <Text style={style.title}>EDUMETRIX</Text>
                </View>

                <View style={{ marginTop: 20,alignItems:"center" }}>

                    <View style={style.emailInput}>

                        <View style={style.emailIcon}>
                            <Icon name="envelope" color={"gray"} size={20} />
                        </View>
                        <View style={style.email}>
                            <TextInput
                                placeholder='Enter your email id'
                                keyboardAppearance="light"
                                keyboardType="email-address"
                                style={style.input}
                            />
                        </View>
                    </View>
                
                </View>

                <View style={style.btnContainer}>

                    <View style={style.signInBtnView}>
                        <TouchableOpacity style={style.signUpTouch}>
                            <Text style={{ color: "white" }}>Send Password</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
               
                </View>
               
                </ScrollView>
            </View>

        )
    }
}

export default ForgotPassword

