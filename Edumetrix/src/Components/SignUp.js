import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import style from '../Stylesheets/SignUpStyle'
import { CheckBox } from 'react-native-elements'



class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checkboxbool: false
        }
    }

    checkboxHandle = (event) => {

        this.setState({
            checkboxbool: !this.state.checkboxbool
        })
    }

    getStartedHandle =(event)=>{
       this.props.navigation.navigate("OtpPage",{page:"signUp"})
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, margin: 1 }}>
                <View style={style.SignUpContainer}>
                    <ScrollView showsVerticalScrollIndicator ={false}>
                        <View style={style.subContainer}>
                            <View style={style.imageview}>
                                <Image source={require('../Assets/logoCoin.png')} style={style.SignUpImage} />
                            </View>
                            <View style={style.titleView}>
                                <Text style={style.title}> EDUMETRIX</Text>
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Username"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="name-phone-pad"
                                />
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="name-phone-pad"
                                />
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Mobile Number"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="number-pad"
                                />
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                />
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Name"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                />
                            </View>
                            <View style={style.username}>
                                <TextInput
                                    placeholder="Surname"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                />
                            </View>

                            <View>
                                <CheckBox

                                    containerStyle={style.checkbox}
                                    title='I read and agree to Terms & Conditions'
                                    textStyle={style.checkboxText}
                                    checked={this.state.checkboxbool}
                                    checkedColor="gray"
                                    onPress={event => this.checkboxHandle(event)}
                                // checked={this.state.checked}
                                />
                            </View>
                            <View style={style.getstartedView}>
                                <TouchableOpacity onPress={event=>this.getStartedHandle(event)} style={style.getstartedTouch}>
                                    <Text style={{ color: "#fff" }}>Get Started</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={style.conditionsView}>
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <Text>Desclaimer</Text>
                                <View style={style.dotView}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:"row",marginLeft:5}}>
                                <Text>Privacy policy</Text>
                                <View style={style.dotView}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:"row",marginLeft:5}}>
                                <Text>Terms of Services</Text>
                              
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>

        )
    }

}

export default SignUp