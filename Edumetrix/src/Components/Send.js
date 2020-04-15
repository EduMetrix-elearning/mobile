import React, { Component } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, TextInput, Modal, Alert } from 'react-native'
import style from '../Stylesheets/SendPageStyle'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
class Send extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isQR: false
        }
    }

    DoneHandle = () => {
        this.props.navigation.navigate("SendConfirmationPage", { data: "" })
    }

    closeHandle = () => {
        this.props.navigation.goBack()
    }

    isQRScanner = () => {
        this.setState({
            isQR: !this.state.isQR
        })
    }

    onSuccess = (e) => {
        // const check = e.data.substring(0, 4);
        const check = e.data
        console.log('scanned data ' + check);
        this.setState({
            isQR: false,

        })
        this.props.navigation.navigate("SendConfirmationPage", { data: { value: check } })


    }
    render() {
        return (
            <SafeAreaView style={style.SafeAreaView}>

                <View style={style.header}>
                    <TouchableOpacity onPress={this.closeHandle} style={style.QrTouch}>
                        <View>
                            <Icon size={24} color={'white'} name={'md-arrow-round-back'} />
                        </View>
                    </TouchableOpacity>

                    <View style={style.title}>
                        <Text style={style.edumetrixTitle}>EduMetrix Coins</Text>
                    </View>

                    <TouchableOpacity onPress={this.isQRScanner} style={style.QrTouch}>
                        <View>
                            <MaterialCommunityIcons size={24} color={'white'} name={'qrcode-scan'} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.mainContainer}>

                    <View style={style.childContainer}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>


                            <View style={style.logoCoinView}>
                                <Image source={require('../Assets/logoCoin.png')} style={style.logoCoinImg} />
                            </View>

                        </View>
                        <View style={style.headingView}>
                            <Text style={style.textView}>Send to Public Address</Text>
                        </View>

                        <View style={style.inputView}>
                            <TextInput
                                placeholder="Public Address or Private Key"
                                placeholderTextColor="#164e64"
                                underlineColorAndroid="#164e64"
                            />
                        </View>
                        <View style={style.buttonView}>
                            <TouchableOpacity onPress={this.closeHandle} style={style.closeBtnTouch}>
                                <Text style={{ fontSize: 15 }}>Close</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.DoneHandle} style={style.doneBtnTouch}>
                                <Text style={{ fontSize: 15, color: "white" }}>Done</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.isQR}
                        onRequestClose={this.isQRScanner}

                    >
                        <View style={{ backgroundColor: "black",flex:1 }}>
                            <QRCodeScanner
                                reactivate={true}
                                showMarker={true}
                                ref={(node) => { this.scanner = node }}
                                onRead={this.onSuccess}

                                // bottomContent={
                                //     <View>
                                //          <TouchableOpacity style={{backgroundColor:"white",width:"50%"}}>
                                //         <Text>cancel</Text>
                                //     </TouchableOpacity>
                                //     </View>
                                // }
                            />
                        </View>


                    </Modal>
                </View>



            </SafeAreaView>

        )
    }
}

export default Send