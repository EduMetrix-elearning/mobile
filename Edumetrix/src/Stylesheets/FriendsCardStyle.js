import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    cardView:{
        // backgroundColor:"yellow",
        display:"flex",
        flexDirection:"row",
       justifyContent:"space-between"
    },
    imageView:{
        // backgroundColor:"red"
    },
    usetDetailView:{
        
       display:"flex",
       flexDirection:"row",
    },
    addUserView:{
        backgroundColor:"pink",
        marginLeft:5
    },
    usrImg:{
       height:60,
       width:60,
       borderRadius:100 
    },
    userName:{
        fontSize:15,
        fontWeight:"bold",
        letterSpacing:1
    },
    userState:{
        color:"gray",
        fontSize:12,
        letterSpacing:1
    },
    followers:{
        fontSize:13,
        color:"#3291C8"
    }
})

export default style 