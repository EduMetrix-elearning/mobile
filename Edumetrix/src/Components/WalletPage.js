import React, { Component } from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Drawer from './Drawer'
import Footer from './Footer'
import style from '../Stylesheets/WalletStyle'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Transactions from './Transactions'
const num = 1234.56789

class WalletPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "white" }}>

                    {/* header area */}
                    <View>
                        <Drawer props={this.props} />
                    </View>
                    {/* company logo view */}
                    <View style={style.headerContainer}>
                        <View style={style.companyTitleView}>
                            <View style={style.logoWithCompnayView}>
                                <View style={style.logo}>
                                    <Image source={require('../Assets/logoCoin.png')} style={style.logoImg} />
                                </View>
                                <View style={style.companyName}>
                                    <Text style={style.companyText}>EduMetrix Coins</Text>
                                </View>
                            </View>
                        </View>

                        <View style={style.emcView}>
                            {/* <Text style={style.amntView}>76,429,892.703 INR</Text> */}
                            <Text style={style.amntView}>76,104,209.104 EMC</Text>
                        </View>
                        <View style={style.ruppeeView}>
                            <View style={{justifyContent:"center"}}>
                                <FontAwesome name="inr" size={17} color={"white"}/>
                            </View>
                            <View style={style.INRamtView}>
                                <Text style={style.amnt}>365,265,25,165.26 INR</Text>
                            </View>
                        </View>
                        <View style={style.buttonsView}>
                            <TouchableOpacity style={style.requestTouch}>
                                <View style={{ justifyContent: "center", marginRight: 20 }}>
                                    <Feather name="download" size={27} color={"white"} />
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={style.sendText}>Request</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.sendTouch}>
                                <View style={{ justifyContent: "center", marginRight: 20 }}>
                                    <Feather name="upload" size={27} color={"white"} />
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <Text style={style.sendText}>Send</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <ScrollView style={{marginTop:1}} showsVerticalScrollIndicator={false}>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                       <Transactions/>
                    </ScrollView>

                </View>
                {/* footer area */}
                <View style={{ backgroundColor: "white" }}>
                    <View>
                        <Footer />
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}

export default WalletPage