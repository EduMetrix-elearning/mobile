import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import style from '../Stylesheets/SendPageStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class SendConfirmationPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.navigation.getParam('data')
        }
    }

    closeHandle = () => {
        this.props.navigation.goBack()
    }

    confrmHandle =()=>{
        this.props.navigation.navigate("OtpPage",{page:"wallet"})
    }

   
    render() {
      
        const { data } = this.state

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#164e64" }}>

                    {/* header */}
                    <View style={style.header}>
                        <TouchableOpacity onPress={this.closeHandle} style={style.QrTouch}>
                            <View>
                                <Icon size={24} color={'white'} name={'md-arrow-round-back'} />
                            </View>
                        </TouchableOpacity>

                        <View style={style.title}>
                            <Text style={style.edumetrixTitle}>EduMetrix Coins</Text>
                        </View>

                        <View style={style.title} />
                    </View>
                    <View style={style.confrmAmntView}>
                        <Text style={{ color: "white" }}>
                            Balance: 76,429,892.703 EMC (363,560,472.29)
                        </Text>
                    </View>
                    <View style={style.confrmAmntView}>
                        <Text style={{ color: "white" }}>
                            1 EMC = Rs. 4.76 INR
                        </Text>
                    </View>

                    <View style={{ padding: 10, alignItems: "center" }}>

                        <View style={style.sendEtheriumView}>
                            <View style={style.ethereumTitle}>
                                <View style={style.sendIcon}>
                                    <Entypo name="select-arrows" size={17} color={"white"} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text>Send From EduMetrix Coin</Text>
                                </View>
                            </View>

                            <View style={style.userInputView}>
                                <TouchableOpacity style={{ justifyContent: "center" }}>
                                    <View>
                                        <MaterialIcons name="swap-vert" size={24} color={"black"} />
                                    </View>
                                </TouchableOpacity>

                                <View style={style.inputAmountView}>
                                    <View style={style.InrAmntEnter}>
                                        <View style={{ width: "85%" }}>
                                            <TextInput
                                                placeholder="Enter Amount"
                                            />
                                        </View>
                                        <View style={style.currencySign}>
                                            <Text>Rs</Text>
                                        </View>
                                    </View>
                                    <View style={style.EmcView}>
                                        <View>
                                            <Text>EMC</Text>
                                        </View>
                                        <View>
                                            <Text>5976</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={style.confrmAmntView}>
                        <Text style={{ color: "white" }}>
                            Fee:+/- 0.0016(rs.19.17)
                        </Text>
                    </View>
                    <View style={style.confrmAmntView}>
                        <Text style={{ color: "white" }}>
                            Address: {data.value}</Text>
                    </View>
                    <View style={style.confrmBtnView}>
                        <TouchableOpacity onPress={this.confrmHandle}
                        style={style.cnfrmTouch}>
                            <Text style={style.cnfrmtext}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default SendConfirmationPage