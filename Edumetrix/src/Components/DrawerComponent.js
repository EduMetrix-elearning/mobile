
import React, { Component } from 'react';
import { Image, View, SafeAreaView, ScrollView, Text, Dimensions, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Home from './Home'
import SearchPage from './SearchPage'
import Profile from './Profile'
import style from '../Stylesheets/DrawerStyle'
import FindFriends from './FindFriends'
import LiveChat from './LiveChat'
import ChatScreen from './ChatScreen'
import EarningPage from './EarningPage'
import WalletPage from './WalletPage'
// import Login from './Login'

const { width, height } = Dimensions.get('screen');


class CustomDrawerComponent extends Component {
    constructor(props) {
        super(props)
        // this.editProfileHandle = this.editProfileHandle(this)
    }


    logoutHandle = () => {


        this.props.navigation.navigate("Login")
    }

    render() {

        let props = this.props

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={style.profileImage}>
                    <View style={{ borderWidth: 1.5, borderColor: "white", borderRadius: 100, padding: 2 }}>
                        <Image source={require('../Assets/kapil.jpg')} style={style.profileImg} />
                    </View>
                    <View style={style.userNameView}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>Kapil asthana (Admin)</Text>
                    </View>

                    <View style={style.userFollowingView}>

                        <TouchableOpacity onPress={() => props.navigation.navigate("FindFriends")}>
                            <View style={style.followersView}>
                                <Text style={{ color: "white" }}>484K Following</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ padding: 10 }}><Text style={{ fontSize: 20, color: "white" }}>|</Text></View>

                        <TouchableOpacity onPress={() => props.navigation.navigate('EarningPage')}>
                            <View style={style.followersView}>
                                <Text style={{ color: "white" }}>484K Followers</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={style.EditProfileView}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                            <View style={style.myHome}>
                                <Text style={{ color: "white" }}>My Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>

                            <View style={style.editProfile}>
                                <Text style={{ color: "white" }}>edit Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ marginBottom: 15 }}>
                    <View >
                        <DrawerItems {...props} />
                    </View>
                    <TouchableOpacity style={style.LogoutView} onPress={this.logoutHandle}>
                        <View style={{ justifyContent: "center" }}>
                            <AntDesign name="logout" color={"white"} size={24} />
                        </View>
                        <View style={{ marginLeft: 30, justifyContent: "center" }}>
                            <Text style={{ color: "white" }}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

                <View style={{ alignContent: "center", alignItems: "center" }}>

                    <View style={style.footerLinksView}>
                        <TouchableOpacity>
                            <View><Text style={{ fontSize: 13, color: "gray" }}>Desclaimer</Text></View>
                        </TouchableOpacity>

                        <View style={style.dotView} />
                        <TouchableOpacity style={{marginLeft:5}}>
                            <View><Text style={{ fontSize: 13, color: "gray" }}>Privacy Policy</Text></View>
                        </TouchableOpacity>
                       

                    </View>
                    <TouchableOpacity style={{marginBottom:5}}>
                        <View><Text style={{ fontSize: 13, color: "gray" }}>Terms of Services</Text></View>
                    </TouchableOpacity>
                    <View style={style.versionView}><Text style={{ fontSize: 13, color: "gray" }}>Version 4.1.0</Text></View>
                </View>
            </SafeAreaView>
        )
    }
}
// const CustomDrawerComponent = (props) => (



//     <SafeAreaView style={{ flex: 1 }}>

//         <View style={style.profileImage}>
//             <View style={{ borderWidth: 1.5, borderColor: "white", borderRadius: 100, padding: 2 }}>
//                 <Image source={require('../Assets/kapil.jpg')} style={style.profileImg} />
//             </View>
//             <View style={style.userNameView}>
//                 <Text style={{ fontWeight: "bold", fontSize: 17,color:"white" }}>Kapil asthana (Admin)</Text>
//             </View>

//             <View style={style.userFollowingView}>
//                 <TouchableOpacity>
//                 <View style={style.followersView}>
//                     <Text style={{ color:"white" }}>484K Following</Text>
//                  </View>
//                  </TouchableOpacity>
//                 <View style={{ padding: 10 }}><Text style={{ fontSize: 20,color:"white" }}>|</Text></View>
//                 <TouchableOpacity >
//                 <View style={style.followersView}>
//                     <Text style={{ color:"white" }}>484K Followers</Text>
//                 </View>
//                 </TouchableOpacity>
//             </View>

//             <View style={style.EditProfileView}>
//                 <View style={style.editProfile}><Text style={{ color:"white" }}>edit Profile</Text></View>

//                 <View style={style.editProfile}><Text style={{ color:"white" }}>My Home</Text></View>
//             </View>
//         </View>

//         <ScrollView>
//             <View >
//                 <DrawerItems {...props}/>
//             </View>

//         </ScrollView>

//         <View style={{ alignContent: "center", alignItems: "center" }}>
//             <View style = {style.footerLinksView}>
//                 <TouchableOpacity>
//                 <View><Text style ={{fontSize:13,color:"gray"}}>Desclaimer</Text></View>
//                 </TouchableOpacity>

//                 <View style={style.dotView}/>
//                 <TouchableOpacity>
//                 <View><Text style ={{fontSize:13,color:"gray"}}>Privacy Policy</Text></View>
//                 </TouchableOpacity>
//                 <View style={style.dotView}/>
//                 <TouchableOpacity>
//                 <View><Text style ={{fontSize:13,color:"gray"}}>Terms of Services</Text></View>
//                 </TouchableOpacity>
//             </View>

//             <View style ={style.versionView}><Text style ={{fontSize:13,color:"gray"}}>Version 4.1.0</Text></View>
//         </View>
//     </SafeAreaView>
// )


const AppDrawerNavigator = createDrawerNavigator({

    Home: {
        screen: Home, navigationOptions:
        {
            drawerIcon: (<Icon name="home" size={24} color={"white"} />),
            drawerLabel: "Home"
        }
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            drawerIcon: (<Icon name="search" size={24} color={"white"} />),
            drawerLabel: "Top Pics For You",
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerIcon: (<Icon name="user" size={24} color={"white"} />),
            drawerLabel: "Profile",
        }
    },
    FindFriends: {
        screen: FindFriends,
        navigationOptions: {
            drawerIcon: (<Icon name="group" size={24} color={"white"} />),
            drawerLabel: "Find Friends",
        }
    },
    LiveChat: {
        screen: LiveChat,
        navigationOptions: {
            drawerIcon: (<Image source={require('../Assets/chat.png')} style={style.chatbotImg} />),
            drawerLabel: "Chat bot",

        }
    },
    Chat: {
        screen: ChatScreen,
        navigationOptions: {
            drawerIcon: (<Icon name="comments-o" size={24} color={"white"} />),
            drawerLabel: "Live Chat",
        }
    },
    EarningPage: {
        screen: EarningPage,
        navigationOptions: {
            drawerIcon: (<MaterialIcons name="attach-money" size={24} color={"white"} />),
            drawerLabel: "Earning",
        }
    },
    Wallet: {
        screen: WalletPage,
        navigationOptions: {
            drawerIcon: (<MaterialIcons name="account-balance-wallet" size={24} color={"white"} />),
            drawerLabel: "Wallet",
        }
    },
    // Logout:{
    //     screen:Login,
    //     navigationOptions:{

    //         drawerIcon: (<AntDesign name="logout" size={24} color={"white"} />),
    //         drawerLabel: "Logout",

    //     }
    // }

}, {
    drawerWidth: Math.min(height, width) * 0.72,
    drawerBackgroundColor: "#3B3E47",

    contentComponent: props => <CustomDrawerComponent {...props} />,
    contentOptions: {
        activeTintColor: "green",
        activeBackgroundColor: 'transparent',
        labelStyle: {
            color: 'white',

        }
    },
})

const AppContainer = createAppContainer(AppDrawerNavigator)



export default AppContainer