
import React, { Component } from 'react';
import { Image, View, SafeAreaView, ScrollView, Text, Dimensions,TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from './Home'
import SearchPage from './SearchPage'
import EditProfilePage from './EditProfilePage'
import style from '../Stylesheets/DrawerStyle'
import FindFriends from './FindFriends'
import LiveChat from './LiveChat'
import ChatScreen from './ChatScreen'
import EarningPage from './EarningPage'
import WalletPage from './WalletPage'

const { width, height } = Dimensions.get('screen');

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>

        <View style={style.profileImage}>
            <View style={{ borderWidth: 1, borderColor: "red", borderRadius: 100, padding: 2 }}>
                <Image source={require('../Assets/kapil.jpg')} style={style.profileImg} />
            </View>
            <View style={style.userNameView}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>Kapil asthana (Admin)</Text>
            </View>

            <View style={style.userFollowingView}>
                <View style={style.followersView}><Text>484K Following</Text></View>
                <View style={{ padding: 10 }}><Text style={{ fontSize: 20 }}>|</Text></View>
                <View style={style.followersView}><Text>484K Followers</Text></View>
            </View>

            <View style={style.EditProfileView}>
                <View style={style.editProfile}><Text>edit Profile</Text></View>

                <View style={style.editProfile}><Text>My Home</Text></View>
            </View>
        </View>

        <ScrollView>
            <View>
                <DrawerItems {...props} />
            </View>

        </ScrollView>

        <View style={{ alignContent: "center", alignItems: "center" }}>
            <View style = {style.footerLinksView}>
                <TouchableOpacity>
                <View><Text style ={{fontSize:13,color:"gray"}}>Desclaimer</Text></View>
                </TouchableOpacity>
                
                <View style={style.dotView}/>
                <TouchableOpacity>
                <View><Text style ={{fontSize:13,color:"gray"}}>Privacy Policy</Text></View>
                </TouchableOpacity>
                <View style={style.dotView}/>
                <TouchableOpacity>
                <View><Text style ={{fontSize:13,color:"gray"}}>Terms of Services</Text></View>
                </TouchableOpacity>
            </View>

            <View style ={style.versionView}><Text style ={{fontSize:13,color:"gray"}}>Version 4.1.0</Text></View>
        </View>
    </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({

    Home: {
        screen: Home, navigationOptions:
        {
            drawerIcon: (<Icon name="home" size={24} color={"black"} />),
            drawerLabel: "Home"
        }
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            drawerIcon: (<Icon name="search" size={24} color={"black"} />),
            drawerLabel: "Top Pics For You",
        }
    },
    Profile: {
        screen: EditProfilePage,
        navigationOptions: {
            drawerIcon: (<Icon name="user" size={24} color={"black"} />),
            drawerLabel: "Profile",
        }
    },
    FindFriends: {
        screen: FindFriends,
        navigationOptions: {
            drawerIcon: (<Icon name="group" size={24} color={"black"} />),
            drawerLabel: "Find Friends",
        }
    },
    LiveChat: {
        screen: LiveChat,
        navigationOptions: {
            drawerIcon: (<Icon name="comments-o" size={24} color={"black"} />),
            drawerLabel: "Live Chat",
        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            drawerIcon: (<Image source={require('../Assets/chat.png')} style ={style.chatbotImg}/>),
            drawerLabel: "Chat bot",
        }
    },
    EarningPage:{
        screen:EarningPage,
        navigationOptions:{
            drawerIcon: (<MaterialIcons name="attach-money" size={24} color={"black"} />),
            drawerLabel: "Earning",
        }
    },
    Wallet:{
        screen:WalletPage,
        navigationOptions:{
            drawerIcon: (<MaterialIcons name="account-balance-wallet" size={24} color={"black"} />),
            drawerLabel: "Wallet",
        }
    },
    
   
    

}, {
    drawerWidth: Math.min(height, width) * 0.9,
    drawerBackgroundColor: "white",
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: "orange"
    }
})

const AppContainer = createAppContainer(AppDrawerNavigator)


// customizing drawer component



export default AppContainer