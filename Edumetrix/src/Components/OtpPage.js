import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image, TouchableOpacity} from 'react-native'
import style from '../Stylesheets/LoginStylesheet'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'


class OtpPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            timer: 3,
            getPage: this.props.navigation.getParam('page')
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
            this.setState({
                timer: "",

            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    submit = () => {

        if (this.state.getPage === "wallet") {

            // await AsyncStorage.setItem('confirm', 'true')  
            this.props.navigation.goBack()
            
        } else {
            // await AsyncStorage.removeItem('confirm')
            this.props.navigation.navigate("GetStarted")
            clearInterval(this.interval);
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, margin: 1 }}>
                <View style={style.loginContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 100 }}>

                            <View style={style.imageView}>
                                <Image source={require('../Assets/logoCoin.png')} style={style.loginCoin} />
                            </View>

                            <View style={style.titleView}>
                                <Text style={style.title}>EDUMETRIX</Text>
                            </View>

                            <View style={{ marginTop: 20,alignItems:"center" }}>

                                <View style={style.emailInput}>

                                    <View style={style.emailIcon}>
                                        <Icon name="lock" color={"gray"} size={20} />
                                    </View>
                                    <View style={style.email}>
                                        <TextInput
                                            placeholder='Enter Mobile OTP'
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
                                            placeholder='Enter Email OTP'
                                            keyboardAppearance="light"
                                            keyboardType="name-phone-pad"
                                            style={style.input}
                                        />
                                    </View>

                                </View>
                            </View>

                            <View style={style.btnContainer}>

                                <View style={style.signInBtnView}>
                                    <TouchableOpacity
                                        onPress={this.submit}
                                        style={style.signUpTouch}>
                                        <Text style={{ color: "white" }}>Submit OTP</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={(this.state.timer === "") ? style.signupBtnView : style.DisableSignupBtnView}>
                                    <TouchableOpacity
                                        disabled={(this.state.timer === "") ? false : true}

                                        style={style.signUpTouch}>
                                        <Text style={(this.state.timer === "") ? { color: "white" } : { color: "gray" }}>Resend OTP</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "100%" }}>
                                    {(this.state.timer !== "") ? <Text style={style.timer}>Resend OTP in seconds:{this.state.timer}</Text>
                                        : <Text style={style.defaultTimer}> </Text>}
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>

        )
    }
}

export default OtpPage

