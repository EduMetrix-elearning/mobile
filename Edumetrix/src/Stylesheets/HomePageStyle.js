import {StyleSheet,Dimensions} from 'react-native'
const ITEM_WIDTH= Dimensions.get("window").width
const style = StyleSheet.create({

    homeSafeArea:{
        backgroundColor:"white",
        flex:1,
        margin:5
    },
    drawerImg:{
        height:25,
        width:25
    },
    createView:{
        backgroundColor:"#F7F7F7",
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    createViewTitle:{

    },
    userInputPostArea:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        padding:5,
      
    },
    imgview:{
        // backgroundColor:"red",
        padding:3,
        width:"16%",
        borderRadius:100
    },
    userImg:{
        height:50,
        width:50,
        borderRadius:100
    },
    inputArea:{
        backgroundColor:"white",
        width:"83%",
        marginLeft:3,
        padding:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:"lightgray"
    },
    sendBtn:{
        backgroundColor:"white",
        // display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    sendImg:{
        height:50,
        width:50,
        
    },
    userPostContainer:{
        backgroundColor:"white",
        margin:5
    },
    userPostProfile:{
        display :"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white"
    },
    userProfile:{
        display :"flex",
        flexDirection:"row",
        backgroundColor:"white",
        padding:10
    },
    postDetail:{
        marginLeft:10,
        color:"lightgray"
    },
    menuicon:{
        marginRight:10,
        marginTop:15
    },
    menuImg:{
        height:15,
        width:15
    },
    postImageView:{
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    postImg:{
        height:300,
        width:ITEM_WIDTH,
    },
    likesCommentView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    commentsView:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        width:"40%",
        justifyContent:"space-around"
    },
    likeImg:{
        height:30,
        width:30,  
    },
    suggestionView:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        // justifyContent:"space-around"
    },
    suggestion:{
   
        padding:1,
        borderWidth:1,
        borderRadius:100,
        borderColor:"#F54C56",
        marginLeft:10
    },
    composeView:{
        flexDirection:"row",
        justifyContent:"center"
    },
    mediaView:{
        justifyContent:"center",
        marginLeft:15,
        flexDirection:"row"
    },
    thumbnailImg:{
        height:30,
        width:30
    },
    modelImg:{
        height:300,
        width:"100%"
    }

})

export default style