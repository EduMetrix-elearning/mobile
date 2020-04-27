import React, { Component } from 'react'
import {
    View, Text, SafeAreaView,
    Image, TouchableOpacity,
    ScrollView, TextInput,
} from 'react-native'
import { Header, Title, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import style from '../Stylesheets/ChatScreenStyle'
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

class Chatbox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true,
            image: "",
            isImage: false
        }
    }
    HandleBack = () => {
        this.props.navigation.goBack()
    }

    onClickAddImage = () => {

        ImagePicker.showImagePicker({ noData: true, mediaType: "photo" }, (Response) => {


            if (Response.didCancel) {


            } else if (Response.error) {

            } else if (Response.customButton) {

            } else {
                const source = { uri: Response.uri }

                this.setState({
                    isImage: true,
                    image: source
                })
            }

        })
    }

    showModal = () => {
        return (
            <Modal isVisible={this.state.isImage}
                animationIn={"slideInLeft"}
                onBackdropPress={() => this.setState({ isImage: false })}
            >
                <View>
                <View style={{ backgroundColor: "white", paddingTop: 20, paddingBottom: 20 }}>
                    <Image source={this.state.image} style={style.modelImg} />
                </View>

                <View style={style.modelInputView}>
                    <View style={style.inputView}>
                        <TextInput
                            placeholder={"say something about picture..."}
                            multiline
                        />
                    </View>
                    <TouchableOpacity style={{justifyContent:"center",marginLeft:10}}>
                    <View style={{justifyContent:"center"}}>
                        <MaterialCommunityIcons name={"send"} size={25} color={"gray"} />
                    </View>
                    </TouchableOpacity>
                   
                </View>
                </View>


            </Modal>
        )
    }

    render() {

        const { navigation } = this.props
        var data = navigation.getParam('data')


        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <View>
                        <Header style={style.HeaderChatbox}>
                            <View style={style.profileHeaderView}>
                                <View>
                                    <Button transparent onPress={this.HandleBack}>
                                        <Icon size={24} color={'white'} name={'md-arrow-round-back'} />
                                    </Button>
                                </View>
                                <View>
                                    <Image source={require('../Assets/kapil.jpg')} style={style.chatboxProfileImg} />
                                </View>
                                <View style={style.profileName}>
                                    <Text style={{ color: "white" }}>{data.name}</Text>
                                </View>
                            </View>

                            <View style={style.callingIconView}>

                                <View style={{ justifyContent: "center", marginRight: 25 }}>
                                    <TouchableOpacity>
                                        <Icon size={24} color={'white'} name={'ios-videocam'} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ justifyContent: "center" }}>
                                    <TouchableOpacity>
                                        <Icon size={24} color={'white'} name={'ios-call'} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {/* <Button transparent onPress={this.HandleBack}>
                                <Icon size={30} color={'black'} name={'md-arrow-round-back'} />
                            </Button>
                            <Title>{data.name}</Title> */}
                        </Header>
                    </View>

                    <View style={{ backgroundColor: "white", flex: 1, padding: 5 }}>
                        <ScrollView>
                            <Text>messages display area</Text>
                        </ScrollView>
                    </View>

                </View>

                {/* footer area */}
                <View style={style.typeMessageView}>

                    <View style={style.messageView}>
                        {/* <TouchableOpacity style={{ justifyContent: "center", marginLeft: 8 }}>
                            <View >
                                <FontAwesome5 size={24} color={'gray'} name={'smile'} />
                            </View>
                        </TouchableOpacity> */}

                        <View style={style.inputText}>
                            <TextInput
                                placeholder={"Type a Message here..."}
                                multiline
                            />
                        </View>

                    </View>

                    <View style={{ justifyContent: "center", padding: 5 }}>
                        <TouchableOpacity>
                            <View>
                                <Icon size={24} color={'gray'} name={'md-send'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.tilesView}>

                    <TouchableOpacity>
                        <View>
                            <FontAwesome5 size={24} color={'gray'} name={'smile'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onClickAddImage}>
                        <View>
                            <FontAwesome size={24} color={'gray'} name={'photo'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View>
                            <FontAwesome size={24} color={'gray'} name={'file-text-o'} />
                        </View>
                    </TouchableOpacity>
                </View>
                {(this.state.image !== "") ? this.showModal() : null}

            </SafeAreaView>
        )
    }
}

export default Chatbox