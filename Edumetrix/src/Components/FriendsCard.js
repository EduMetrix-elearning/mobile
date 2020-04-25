import React, { Component } from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { Card } from 'react-native-elements'
import style from '../Stylesheets/FriendsCardStyle'
import Icon from 'react-native-vector-icons/Ionicons'

class FriendsCard extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <Card containerStyle={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "white",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 5,
                }}>
                    <View style={style.cardView}>
                        <View style={style.usetDetailView}>
                            <View>
                                <Image source={require('../Assets/kapil.jpg')} style={style.usrImg}/>
                            </View>

                            <View style = {{marginLeft:10}}>
                                <Text style ={style.userName}>kapil asthana</Text>
                                <Text style={style.userState}>Kerala,India</Text>
                                <Text style={style.followers}>56 following</Text>
                                </View>

                        </View>
                        <TouchableOpacity style={{justifyContent:"center"}}>
                        <View>
                        <Icon name="ios-person-add" size={24} color={"black"} />
                        </View>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        )
    }
}

export default FriendsCard