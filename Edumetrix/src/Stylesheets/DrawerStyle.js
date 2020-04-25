import {StyleSheet} from 'react-native'

const style = StyleSheet.create({


    safeAreaView:{
        // backgroundColor:"red"
    },

    drawerHeader:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"yellow",
        padding:5,
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"lightgray"

    },
    drawerMenu:{
        // backgroundColor:"pink",
        width:"10%",
        padding:5,
        alignItems:"center"
    },
    headerMenuContainer:{
        width:"50%",
        // backgroundColor:"green",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:5
    },
    drawerImg:{
        height:25,
        width:25
    },
    profileImage:{
        // backgroundColor:"red",
        padding:20,
        alignItems:"center",
        alignContent:"center",
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:"lightgray"
    },
    profileImg:{
        height:100,
        width:100,
        borderRadius:100
    },
    userNameView:{
        padding:10
    },
    userFollowingView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        // backgroundColor:"darkgreen",
      
        alignContent:"center",
        alignItems:"center"
    },
    followersView:{
        borderWidth:1,
        padding:6,
        borderRadius:20,
        borderColor:"white"
    },
    EditProfileView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",

        width:"70%",
       
    },
    editProfile:{
        borderWidth:1,
        padding:6,
        borderRadius:20,
        borderColor:"white",
        marginLeft:10
    },
    myHome:{
        borderWidth:1,
        padding:6,
        borderRadius:20,
        borderColor:"white",
    },
    footerLinksView:{
        width:"90%",
        display:"flex",
        flexDirection:"row",
       justifyContent:"center",
        marginBottom:5
    },
    dotView:{
        backgroundColor:"gray",
        borderRadius:100,
        height:4,
        width:4,
        marginTop:8,
        marginLeft:10 
    },
    versionView:{
        marginBottom:5
    },
    chatbotImg:{
        height:24,
        width:24
    },
    LogoutView:{
        flexDirection:"row",
        marginLeft:17,
    }

})

export default style