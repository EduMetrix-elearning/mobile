import React, { Component } from 'react'
import { View, Text, Image,ScrollView } from 'react-native'
import style from '../Stylesheets/HomePageStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import SuggetionsPost from './SuggetionsPost'
class Posts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            totalLikes:"2,875"
        }
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
                    <View style={style.menuicon}>
                        <Image source={require('../Assets/menu.png')} style={style.menuImg} />
                    </View>
                </View>
                {/* post image view show... */}

                <View style={style.postImageView}>
                    <Image source={require('../Assets/bird.jpg')} style={style.postImg} />
                </View>
                {/* like and comments view... */}

                <View style = {style.likesCommentView}>
                   <View>
                   <Text>{this.state.totalLikes} likes</Text>
                   </View>

                   <View style = {style.commentsView}>
                   <Image source={require('../Assets/dislike.png')} style={style.likeImg} />
                   <Image source={require('../Assets/comment.png')} style={style.likeImg} />
                   <Icon name="bookmark-o" color={"black"} size={30} />  
                   </View>
                </View>
                <View style = {style.suggestionView}>
                    <ScrollView horizontal={true}>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
                <SuggetionsPost/>
               
                </ScrollView>
                </View>
            </View>
        )
    }
}

export default Posts
