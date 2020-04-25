import {StyleSheet,Dimensions} from 'react-native'

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width


const Style = StyleSheet.create({


    container:{
        marginLeft:5,
        marginRight:5,
        flex:1,
        backgroundColor:"#EEF0F1"
    },
    headerContainer:{
        backgroundColor:"#164e64",
        padding:10,
        flexDirection:"row",  
    },
    notificationView:{
        // backgroundColor:"lightgray",
        padding:5,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        marginTop:5
    },
    subView:{
        flexDirection:"row"
    },
    userImg:{
        height:50,
        width:50,
        borderRadius:100
    },
    nameText:{
        fontWeight:"700",
        fontSize:16,
        letterSpacing:0.8
    },
    locationText:{
        fontSize:13,
        color:"gray"
    }
})

export default Style