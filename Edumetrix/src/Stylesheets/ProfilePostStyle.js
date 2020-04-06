import {StyleSheet,Dimensions} from 'react-native'
const ITEM_WIDTH= Dimensions.get("window").width
const style = StyleSheet.create({

    profilePostContainer:{
        // backgroundColor:"red",
        padding:10,
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between"
    },
    profileDetailContainer:{
        // backgroundColor:"yellow",
        width:"80%",
        display:"flex",
        flexDirection:"row",
        
    },
    imgContainer:{
       
        // backgroundColor:"pink",
        borderColor:"red"
    },
    imgView:{
        // backgroundColor:"red",
        padding:1,
        borderWidth:1,
        borderRadius:100,
        borderColor:"red"
    },
    postDetail:{
        marginLeft:15,
       
    },
    profileImg:{
        height:60,
        width:60,
        borderRadius:100
    },
    userName:{
     fontWeight:"bold",
     fontSize:16,
     letterSpacing:1,
     color:"#393e42" 
    },
    postDate:{
       
     fontSize:10,
     fontWeight:"bold",
     color:"gray",
     marginTop:1  
    },
    menuImg:{
        height:15,
        width:15,
        marginTop:10
    },
    postImg:{
        height:300,
        width:ITEM_WIDTH
    },
    likeView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15
    },
    likeImg:{
        height:20,
        width:20
    },
    writeCommentView:{
        marginTop:20,
        
        padding:10
    },
    commentSubView:{
        backgroundColor:"lightgray",
        padding:10,
        borderRadius:20,
        display:"flex",
        flexDirection:"row" 
    },
    inputArea:{
        // backgroundColor:"red",
        width:"80%",
        display:"flex",
        flexDirection:"row"
    },
    commentProfileImg:{
        height:40,
        width:40,
        borderRadius:100
    },
    postBtnView:{
        marginLeft:20,
        justifyContent:"center",
       
    },
    postBtn:{
        borderRadius:8,
        backgroundColor:"#3291C8",
        padding:8,
       
    }
})

export default style