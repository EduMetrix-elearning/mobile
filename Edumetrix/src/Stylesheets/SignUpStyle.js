import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    SignUpContainer:{
        flex:1,
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"center",
        backgroundColor:"white"
    },
    subContainer:{
        // backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:100
    },
    imageview:{
        // backgroundColor:"pink",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"

    },
    titleView:{
        marginTop:15
    },
    title:{
        fontSize: 15,
        letterSpacing: 1,
        color: "gray"
    },
    SignUpImage:{
        height:100,
        width:100
    },
    username:{
        width:"90%",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        padding:4
    },
    checkbox:{
        backgroundColor:"white",
       borderWidth:0,
    },
    checkboxText:{
        color:"gray",
        fontWeight:"normal"
    },

    getstartedView:{
        backgroundColor:"#3D94BE",
        width: "90%",
        borderRadius: 80,
        marginTop: 10,
    },
    getstartedTouch:{
        width:"100%",
        padding:10,
        alignItems:"center",
        
    },

})

export default style