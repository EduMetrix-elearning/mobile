import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    socialMediaContainer:{
    //  backgroundColor:"yellow",
     marginTop:10,
     padding:5   
    },
    linkedInFacebookContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
    },
    LinkedInView:{
        // backgroundColor:"red",
        width:"50%"
    },
    facebookView:{
        // backgroundColor:"green",
        width:"49%"
    },
    linkedIn:{
        alignItems:"flex-end",
    },
    LinkedInFollow:{
        backgroundColor:"#0e76a8",
       display:"flex",
       flexDirection:"row",
       width:"50%",
       padding:5,
       justifyContent:"space-between"
    },
    linkedInImg:{
        height:15,
        width:15
    },
    followUs:{
        marginLeft:6,
        justifyContent:"center"
    },
    fbImg:{
        height:15,
        width:15 
    },
    facebookFollow:{
        backgroundColor:"#3b5998",
       display:"flex",
       flexDirection:"row",
       padding:5,
       justifyContent:"space-between"
    },
    twitterFollow:{
        backgroundColor:"white",
       display:"flex",
       flexDirection:"row",
       width:"50%",
       padding:5,
       borderWidth:1.5,
       borderColor:"lightblue",
       justifyContent:"space-around"
    },
    twitterImg:{
        height:18,
        width:18  
    },
    instagramFollow:{
        backgroundColor:"white",
       display:"flex",
       flexDirection:"row",
       padding:6,
       justifyContent:"space-around"
    },
    whatsNewImg:{
        height:80,
        width:"100%"
    },
    logoCoinImg:{
        height:60,
        width:60
    }
})

export default style