import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import style from '../Stylesheets/HomePageStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal';
import SuggetionsPost from './SuggetionsPost'

class Posts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalLikes: "2,875",
            isMenuClicked: false
        }
    }

    menuHandle = () => {

        this.setState({
            isMenuClicked: !this.state.isMenuClicked
        })
    }

    showReportModel = () => {
        return (
            <Modal isVisible={this.state.isMenuClicked}
                onBackdropPress={this.menuHandle}
                onBackButtonPress={this.menuHandle}
            >

                <TouchableOpacity onPress={this.menuHandle}>
                    <View style={{ padding: 10,backgroundColor:"white" }}>
                        <Text>Report us...</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    render() {
        return (
            <View style={style.userPostContainer}>

                {/* user post image and  post details view.... */}
                <View style={style.userPostProfile}>

                    <View style={style.userProfile}>

                        <View>
                            <Image source={require('../Assets/kapil.jpg')} style={style.userImg} />
                        </View>

                        <View style={style.postDetail}>
                            <Text>kapil asthana</Text>
                            <Text>27 December 13:12:00</Text>
                        </View>

                    </View>
                    <TouchableOpacity onPress={this.menuHandle}>
                        <View style={style.menuicon}>
                            <Image source={require('../Assets/menu.png')} style={style.menuImg} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* post image view show... */}

                <View style={style.postImageView}>
                    <Image source={require('../Assets/bird.jpg')} style={style.postImg} />
                </View>
                {/* like and comments view... */}

                <View style={style.likesCommentView}>
                    <View>
                        <Text>{this.state.totalLikes} likes</Text>
                    </View>

                    <View style={style.commentsView}>
                        <TouchableOpacity>
                            <AntDesign name="like2" color={"black"} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="comment-o" color={"black"} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="download" color={"black"} size={24} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={style.suggestionView}>
                    <ScrollView horizontal={true}>
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />
                        <SuggetionsPost />

                    </ScrollView>
                </View>
                {
                    (this.state.isMenuClicked) ? this.showReportModel() : null
                }
            </View>
        )
    }
}

export default Posts
