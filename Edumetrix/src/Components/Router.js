import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './Login'
import SplashScreen from './SplashScreen'
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp'
import OtpPage from './OtpPage'
import Dashboard from './Dashboard'

const mainNavigator = createStackNavigator({
    Login:{screen:Login,navigationOptions:{headerShown:false}},
    SplashScreen:{screen:SplashScreen,navigationOptions:{headerShown:false}},
    ForgotPassword:{screen:ForgotPassword,navigationOptions:{headerShown:false}},
    SignUp:{screen:SignUp,navigationOptions:{headerShown:false}},
    OtpPage:{screen:OtpPage,navigationOptions:{headerShown:false}},
    Dashboard:{screen:Dashboard,navigationOptions: {headerShown:false}}
},
{initialRouteName: 'SplashScreen'}
);

const Router = createAppContainer(mainNavigator)

export default Router

