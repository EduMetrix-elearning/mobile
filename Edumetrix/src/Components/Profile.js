import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import style from '../Stylesheets/ProfilePageStyle'
import Drawer from './Drawer'
import UserProfileBio from './UserProfileBio'
import ProfilePost from './ProfilePost'
import Footer from './Footer'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isProfilePage: false,
            isSubmenu: false,
            
        }
    }

    componentDidMount() {
        console.log("inside profile");
        
    }

    downloadHandle = () => {
        console.log("download btn pressed");

    }
    subMenuHandle = () => {
        this.setState({
            isSubmenu: !this.state.isSubmenu
        })

    }

    getData = (data) => {
        console.log("get data", data);

    }

    render() {

        //    subMenu
        return (

            <SafeAreaView style={{ flex: 1 ,backgroundColor:"white"}}>
                <Drawer getData={this.getData} props={this.props} />
                <View style={style.headerViewContainer}>

                    <View style={style.showIdView}>
                        <Text style={style.idHeading}>EduMetrix ID:AA00AA00</Text>
                        <Text style={style.scoreHeading}>Edumetrix profile score: 100%</Text>
                    </View>

                    <View style={style.subMenuContainer}>
                        <TouchableOpacity onPress={this.subMenuHandle}>
                            {(this.state.isSubmenu) ?
                                <View style={{
                                    borderWidth: 1, borderRadius: 5, padding: 5,
                                    backgroundColor: "#E4EBEF", borderColor: "gray"
                                }}>
                                    <Text>Back </Text>
                                </View>
                                :
                                <View style={{ borderWidth: 1, borderRadius: 5, backgroundColor: "#E4EBEF", borderColor: "gray" }}>
                                    <Image source={require('../Assets/subMenu.png')} style={style.submenuImg} />
                                </View>
                            }


                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:70}}>
                     <ScrollView style={{ marginBottom: 75 }} showsVerticalScrollIndicator={false}>
                        {(this.state.isSubmenu)
                            ?
                            <View>
                                <ProfilePost />
                                <ProfilePost />
                                <ProfilePost />
                                <ProfilePost />
                                <ProfilePost />
                                <ProfilePost />
                            </View>

                            :
                            <UserProfileBio />
                        }

                    </ScrollView>
                    
               </View>



                {/* Bottom tabs */}
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 ,backgroundColor:"white"}}>

                    <Footer props={this.props}/>
                </View>
            </SafeAreaView>

            

        )
    }

}

export default Profile