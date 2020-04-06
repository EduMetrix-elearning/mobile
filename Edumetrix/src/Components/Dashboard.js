import React, { Component } from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import DrawerComponent from './DrawerComponent'


class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
       
        
        return (
            <View style = {{flex:1}}>
                <DrawerComponent />
            </View>
        )
    }
}


export default Dashboard