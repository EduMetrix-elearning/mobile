import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from '../Stylesheets/WalletStyle'
import Feather from 'react-native-vector-icons/Feather'

class Transactions extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <View style={style.dateView}>
                    <Text style={style.date}>March,13,2020</Text>
                </View>

                <View style={style.TransactionView}>
                    <View style={style.sendView}>

                        <View >
                            <View style={style.sendIconView}>
                            <Feather name="download" size={28} color={"#164e64"} />
                            </View>
                        
                        </View>

                        <View style={{marginLeft:10}}>
                            <Text>sent EMC</Text>
                            <Text>7:51 PM</Text>
                        </View>

                    </View>
                    <View style={style.balanceView}>
                    <Text style={{color:"darkred"}}>-100,000</Text>
                    <Text style={{color:"#164e64"}}>365,265,25,165.26 INR</Text>
                    </View>
                </View>
                {/* duplicate */}
                <View style={style.TransactionView}>
                    <View style={style.sendView}>

                        <View >
                            <View style={style.sendIconView}>
                            <Feather name="download" size={28} color={"#164e64"} />
                            </View>
                        
                        </View>

                        <View style={{marginLeft:10}}>
                            <Text>sent EMC</Text>
                            <Text>7:51 PM</Text>
                        </View>

                    </View>
                    <View style={style.balanceView}>
                    <Text style={{color:"darkred"}}>-100,000</Text>
                    <Text style={{color:"#164e64"}}>365,265,25,165.26 INR</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Transactions