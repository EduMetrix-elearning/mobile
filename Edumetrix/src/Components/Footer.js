import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/Ionicons'

class Footer extends Component{


    homeHandle=()=>{

        }

render(){
    return(
        <View>
             <View style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-around", zIndex: 1 }}>
                        <View>
                            <TouchableOpacity onPress={this.homeHandle}>
                                <Icon name="home" size={24} color={"black"} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <MaterialIcon name="ios-search" size={24} color={"black"} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Icon name="user-o" size={23} color={"black"} />
                            </TouchableOpacity>
                        </View>
                    </View>
             
        </View>
    )
}
}

export default Footer