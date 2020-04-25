import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import Drawer from './Drawer'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import style from '../Stylesheets/HomePageStyle'
import Posts from './Posts'
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isCreatePost: false,
            clickedImage: "",
            clickVideo: "",
            isImgclick: false,
           
        }
    }

    getData = (data) => {
        console.log("get data", data);
        this.setState({
            isCreatePost: data
        })
    }

    onClickAddImage = () => {

        ImagePicker.showImagePicker({ noData: true, mediaType: "photo" }, (Response) => {


            if (Response.didCancel) {


            } else if (Response.error) {

            } else if (Response.customButton) {

            } else {
                const source = { uri: Response.uri }

                this.setState({
                    clickedImage: source
                })
            }

        })
    }

    videoHandle = () => {

        ImagePicker.showImagePicker({ noData: true, mediaType: "video" }, (Response) => {


            if (Response.didCancel) {


            } else if (Response.error) {

            } else if (Response.customButton) {

            } else {
                const source = { uri: Response.uri }

                this.setState({
                    clickVideo: source
                })
            }
        })
    }

    imageClickHandle = () => {

        this.setState({
            isImgclick: !this.state.isImgclick
        })
    }


    showModel = () => {
        return (
            <View>
                <Modal animationIn={"slideInLeft"}
                    isVisible={this.state.isImgclick}
                    onBackButtonPress={this.imageClickHandle}
                    onBackdropPress={this.imageClickHandle}
                >
                    <View style={{backgroundColor:"white",paddingTop:20,paddingBottom:20}}>
                        <Image source={this.state.clickedImage} style={style.modelImg}/>
                    </View>

                </Modal>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={style.homeSafeArea}>

                <Drawer getData={this.getData} props={this.props} />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ margin: 5 }}>
                        {/* create view actions ... */}
                        {(this.state.isCreatePost) ?
                            <View>
                                <View style={style.createView}>
                                    {/*  */}

                                    <TouchableOpacity onPress={this.onClickAddImage} style={style.composeView}>
                                        <View style={{ justifyContent: "center" }}>
                                            <FontAwesome name="photo" size={20} color={"gray"} />
                                        </View>
                                        <View style={{ justifyContent: "center", marginLeft: 10 }}>
                                            <Text style={{ color: "#459DEF" }}> Upload Photo</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <View style={{ justifyContent: "center" }}>
                                        <Text>|</Text>
                                    </View>
                                    <TouchableOpacity onPress={this.videoHandle} style={style.composeView}>
                                        <View style={{ justifyContent: "center" }}>
                                            <FontAwesome name="video-camera" size={20} color={"gray"} />
                                        </View>
                                        <View style={{ justifyContent: "center", marginLeft: 10 }}>
                                            <Text style={{ color: "#459DEF" }}>upload Video</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* user post view area where user input details about post..... */}
                                <View>
                                    <View style={style.userInputPostArea}>
                                        <View style={style.imgview}>
                                            <Image source={require('../Assets/kapil.jpg')} style={style.userImg} />
                                        </View>
                                        {/* user input area */}
                                        <View style={style.inputArea}>

                                            <TextInput
                                                placeholder="Write something Here..."
                                                keyboardAppearance="light"
                                                keyboardType="default"
                                                multiline
                                            />
                                        </View>
                                    </View>
                                    {/* send button */}

                                    <View style={style.sendBtn}>

                                        <View style={style.mediaView}>

                                            <View>
                                                {(this.state.clickedImage !== "") ?
                                                    <TouchableOpacity onPress={this.imageClickHandle}>
                                                        <View>
                                                            <Image source={this.state.clickedImage} style={style.thumbnailImg} />
                                                            <Text style={{ fontSize: 10 }}>01.img</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    :
                                                    null}
                                            </View>


                                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                                <View>
                                                    {(this.state.clickVideo !== "") ?
                                                        <View>
                                                            <Image source={this.state.clickVideo} style={style.thumbnailImg} />
                                                            <Text style={{ fontSize: 10 }}>02.mp4</Text>
                                                        </View>
                                                        :
                                                        null}
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <View>
                                                <Image source={require('../Assets/send.jpg')} style={style.sendImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>

                            : null}

                        <Posts />
                        <Posts />
                        <Posts />
                    </View>

                </ScrollView>

                <View style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    <View>
                        <TouchableOpacity>
                            <Icon name="home" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("SearchPage")}>
                            <MaterialIcon name="ios-search" size={24} color={"black"} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")}>
                            <Icon name="user-o" size={23} color={"black"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {(this.state.isImgclick) ? this.showModel() : null}
            </SafeAreaView>
        )
    }
}

export default Home