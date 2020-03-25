import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from '../Stylesheets/DashboardStyle'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/Ionicons'
import Drawer from './Drawer'
import Home from './Home'
import SearchPage from './SearchPage'
import EditProfilePage from './EditProfilePage'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <View style = {{flex:1}}>
                <Drawer />
                <AppContainer/>
            </View>





        )
    }
}

const bottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel:' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={30} color={"black"} />
            )
        }
    },
    Search: {
        screen: SearchPage,
        navigationOptions: {
            tabBarLabel:' ',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name="ios-search" size={30} color={"black"} />
            )
        }
    },
    Profile: {
        screen: EditProfilePage,
        navigationOptions: {
            tabBarLabel:' ',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="user-o" size={30} color={"black"} />
            )
        }
    }

})

const AppContainer = createAppContainer(bottomTabNavigator);

export default Dashboard