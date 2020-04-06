import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TextInput } from 'react-native'
import style from '../Stylesheets/ProfilePostStyle'

class ProfilePost extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                {/* user profile in post.. */}
                <View style={style.profilePostContainer}>
                    <View style={style.profileDetailContainer}>
                        <View style={style.imgContainer}>
                            <View style={style.imgView}>
                                <Image source={require('../Assets/kapil.jpg')} style={style.profileImg} />
                            </View>
                        </View>
                        <View style={style.postDetail}>
                            <Text style={style.userName}>kapil asthana</Text>
                            <Text style={style.postDate}>Wednesday,12:00 PM</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../Assets/menu.png')} style={style.menuImg} />
                    </View>
                </View>
                <View>
                    <Image source={require('../Assets/bird.jpg')} style={style.postImg} />
                </View>

                <View style={style.likeView}>
                    <Image source={require('../Assets/like2.png')} style={style.likeImg} />
                    <Image source={require('../Assets/comment.png')} style={style.likeImg} />
                </View>
                <View style={style.writeCommentView}>
                    <View style={style.commentSubView}>
                        <View style={style.inputArea}>
                            <View>
                                <Image source={require('../Assets/kapil.jpg')} style={style.commentProfileImg} />
                            </View>
                            <View style = {{width:"85%",marginLeft:5}}>
                                <TextInput 
                                placeholder="write something here..."
                                multiline
                                
                                />
                            </View>

                        </View>
                        <View style ={style.postBtnView}>
                            <View style={style.postBtn}>
                            <Text style={{color:"white",fontWeight:"bold"}}>post</Text>
                            </View>
                           
                        </View>

                    </View>

                </View>
            </View>
        )
    }
}

export default ProfilePost