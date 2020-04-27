import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import style from '../Stylesheets/DesclaimerStyle'

class Desclaimer extends Component {





    loginHandle = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={style.SafeAreaView}>
                <View style={style.HeaderView}>
                    <View style={style.logoView}>
                        <View style={style.companyLogo}>
                            <Image source={require('../Assets/logo.png')} style={style.logo} />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: "center" }}>
                            <Text style={style.edumetrixText}>Edumetrix</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this.loginHandle}>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={style.edumetrixText}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.mainContainerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={style.desclaimerHeading}>Desclaimer</Text>
                        </View>
                        <View>
                            <Text style={style.desclaimerText}>
                                The information contained in this website is for general information purposes only.
                                The information is provided by EduMetrix.io and while we endeavour to keep the
                                information up to date and correct,
                                we make no representations or warranties of any kind, express or implied,
                                about the completeness, accuracy, reliability, suitability or availability
                                with respect to the website or the information, products, services, or related
                                graphics contained on the website for any purpose.
                                Any reliance you place on such information is therefore strictly at your own risk.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.desclaimerText}>
                                In no event will we be liable for any loss or
                                damage including without limitation, indirect or consequential
                                loss or damage, or any loss or damage whatsoever arising from loss
                                of data or profits arise out of, or in connection with, the use of this website.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.desclaimerText}>
                                Through this website you are able to link to other
                                websites which are not under the control of EduMetrix.io.
                                We have no control over the nature, content and availability of those sites.
                                The inclusion of any links does not necessarily imply a recommendation
                                or endorse the views expressed within them.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.desclaimerText}>
                                Every effort is made to keep the website up and running smoothly.
                                However, EduMetrix.io takes no responsibility for, and will not be
                                liable for, the website being temporarily unavailable due to technical
                                issues beyond our control.
                            </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={style.desclaimerText}>
                                EduMetrix.io is located at –
                            </Text>
                        </View>
                        <View>
                            <Text style={style.desclaimerText}>
                                Address: 63,4th cross,Vysya Bank Coloney, Arekere, Bangalore, 560068
                            </Text>
                        </View>
                        <View>
                            <Text style={style.desclaimerText}>
                                Email: support@edumetrix.io
                            </Text>
                        </View>
                        <View>
                            <Text style={style.desclaimerText}>
                            Website: www.eduemtrix.io
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={style.bottomHeading}>
                    <Text>Edumetrix © 2019</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Desclaimer