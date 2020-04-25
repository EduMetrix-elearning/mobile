import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/Ionicons'

class Footer extends Component {
   
    constructor(props) {
        super(props)
    }

    homeHandle = () => {
        // console.log("footer props",this.props.props.navigation.navigate);
       this.props.props.navigation.navigate("Home")   
    }

    searchHandle = () =>{
        this.props.props.navigation.navigate("SearchPage")   
    }

    profileHandle = () => {
        this.props.props.navigation.navigate("Profile")
    }
 
    render() {
        return (
            <View>
                <View style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-around", zIndex: 1 }}>
                    <View>
                        <TouchableOpacity onPress={this.homeHandle}>
                            <Icon name="home" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.searchHandle}>
                            <MaterialIcon name="ios-search" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.profileHandle}>
                            <Icon name="user-o" size={23} color={"black"} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

export default Footer