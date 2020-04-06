import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Drawer from './Drawer'
import Footer from './Footer'
import Slideshow from 'react-native-image-slider-show';
import FollowingPost from './FollowingPost'
import { SafeAreaView } from 'react-navigation'
import style from '../Stylesheets/LiveChatStyle'
import CustomChatBot from './CustomChatBot'

class LiveChat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            position: 1,
            interval: 1,
            dataSource: [
                {

                    url: require('../Assets/insect.jpeg'),
                }, {

                    url: require('../Assets/mario.jpg'),
                }, {

                    url: require('../Assets/lion.jpg'),
                },
            ],
        };
    }

    UNSAFE_componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    handlePress = () => {

        console.log("i am working==============",this.props.navigation.navigation);
        this.props.navigation.navigate('CustomChatBot')
        console.log("i am working==============2");
    }
    render() {
        console.log("=======================this props in live chat============",this.props);
        
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <View>
                        <Drawer props={this.props} />
                    </View>

                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* slider */}
                            <View>
                                <Slideshow
                                    height={230}
                                    dataSource={this.state.dataSource}
                                    position={this.state.position}
                                    arrowSize={0}
                                />
                            </View>

                            {/* social media container */}
                            <View style={style.socialMediaContainer}>
                                {/* linked in and facebook */}
                                <View style={style.linkedInFacebookContainer}>



                                    <View style={style.LinkedInView}>

                                        <View style={style.linkedIn}>

                                            <View style={style.LinkedInFollow}>
                                                <View>
                                                    <Image source={require('../Assets/follow-linked.png')} style={style.linkedInImg} />
                                                </View>
                                                <TouchableOpacity onPress={this.handlePress}>
                                                    <View style={style.followUs}>

                                                        <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
                                                            Follow us
                                                </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={{ height: 123 }}>
                                            <ScrollView>
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                            </ScrollView>
                                        </View>
                                    </View>



                                    <View style={style.facebookView}>
                                        <View style={style.linkedIn}>

                                            <View style={style.facebookFollow}>
                                                <View style={{ borderWidth: 1.5, borderColor: "white", padding: 2, borderRadius: 2 }}>
                                                    <Image source={require('../Assets/follow-fb.png')} style={style.fbImg} />
                                                </View>

                                                <View style={style.followUs}>
                                                    <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
                                                        Facebook
                                                </Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{ height: 123 }}>
                                            <ScrollView>
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                                <FollowingPost />
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>


                                {/* twitter and instagramm */}
                                <View style={{ marginTop: 10 }}>

                                    <View style={style.linkedInFacebookContainer}>



                                        <View style={style.LinkedInView}>

                                            <View style={style.linkedIn}>

                                                <View style={style.twitterFollow}>
                                                    <View>
                                                        <Image source={require('../Assets/twitter.png')} style={style.twitterImg} />
                                                    </View>

                                                    <View style={style.followUs}>
                                                        <Text style={{ color: "#00acee", fontSize: 13, fontWeight: "bold" }}>
                                                            Twitter
            </Text>
                                                    </View>

                                                </View>
                                            </View>
                                            <View style={{ height: 123 }}>
                                                <ScrollView>
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                </ScrollView>
                                            </View>
                                        </View>



                                        <View style={style.facebookView}>
                                            <View style={style.linkedIn}>

                                                <View style={style.instagramFollow}>
                                                    <View>
                                                        <Image source={require('../Assets/instagram.png')} style={style.fbImg} />
                                                    </View>

                                                    <View style={style.followUs}>
                                                        <Text style={{ color: "black", fontSize: 13, fontWeight: "bold" }}>
                                                            Instagram
            </Text>
                                                    </View>

                                                </View>
                                            </View>
                                            <View style={{ height: 123 }}>
                                                <ScrollView>
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                    <FollowingPost />
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Image source={require('../Assets/whatsNew.png')} resizeMode={"stretch"} style={style.whatsNewImg} />
                            </View>
                            <View>
                                <FollowingPost />
                                <FollowingPost />
                                <FollowingPost />
                                <FollowingPost />
                                <FollowingPost />
                                <FollowingPost />
                                <FollowingPost />
                            </View>


                        </ScrollView>
                    </View>

                </View>

                {/* footer tabs.... */}
                <View style={{ backgroundColor: "transparent", alignItems: "flex-end" }}>
                    <View style={{ marginRight: 10 }}>
                        <Text style={{ fontWeight: "bold", color: "lightblue" }}>Ask Me</Text>
                    </View>
                    <TouchableOpacity onPress={this.handlePress}>
                        <View>

                            <Image source={require('../Assets/logoCoin.png')} style={style.logoCoinImg} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>

                    <View style={{ backgroundColor: "white" }}>
                        <Footer props={this.props} />
                    </View>

                </View>

            </SafeAreaView >
        )
    }
}

export default LiveChat