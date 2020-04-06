import React, { Component } from 'react'
import { View, Text, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import style from '../Stylesheets/DrawerStyle'



class Drawer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAddPost :false
        }
    }

    sendState = async()=>{
       await this.setState({
        isAddPost : !this.state.isAddPost
       })
        
       this.props.getData(this.state.isAddPost)
    }
    render() {
        // console.log("drawer==================\n\n\n ",this.props.props.navigation);
        
        return (
            <SafeAreaView style={style.safeAreaView}>
             
                <View style={style.drawerHeader}>
                   
                    <View style = {style.drawerMenu}>
                        <TouchableOpacity onPress ={this.props.props.navigation.openDrawer}>
                          <Image source = {require('../Assets/drawer.png')} style={style.drawerImg}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {style.headerMenuContainer}>
                    <Image source = {require('../Assets/post-notification.png')} style={style.postNotification}/>
                    <Image source = {require('../Assets/chat-notification.png')} style={style.postNotification}/>
                        <View>
                            <TouchableOpacity  onPress ={this.sendState}>
                            <View style = {{borderWidth:1,padding:4,borderColor:"gray",borderRadius:5,marginRight:5}}>
                                <Text style={{fontWeight:"bold",color:"gray",fontSize:12}}>+</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
             
            </SafeAreaView>
        )
    }
}

export default Drawer