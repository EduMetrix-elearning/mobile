import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    footerView: {
        backgroundColor: "white"
    },
    userView: {
        // backgroundColor:"yellow",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
    },
    userImg: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    username: {
        justifyContent: "center",
        marginLeft: 10,

    },
    time: {
        justifyContent: "center"
    },
    HeaderChatbox: {
        backgroundColor: "#164e64",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
       
        padding:10
    },
    chatboxProfileImg:{
     height:40,
     width:40,
     borderRadius:100,
     marginTop:5,
     marginLeft:5   
    },
    profileHeaderView: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
       
    },
    profileName:{
        justifyContent:"center",
        marginLeft:5,
        color:"white"
    },
    callingIconView:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        marginRight:5
    },
    typeMessageView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"#EEF0F1"
    },
    messageView:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        width:"87%",
       
        borderRadius:30
    },
    inputText:{
        backgroundColor:"white",
        width:"100%",
        justifyContent:"center",
        marginLeft:2,
        borderRadius:30
    },
    tilesView:{
        backgroundColor:"white",
        padding:10,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    modelImg:{
        height:300,
        width:"100%"
    },
    modelInputView:{
        backgroundColor:"white",
        flexDirection:"row",
        padding:10
    },
    inputView:{
        borderWidth:1,
        width:"90%",
        backgroundColor:"lightgray",
        padding:3,
        borderRadius:30,
        borderColor:"lightgray"
    }
})

export default style