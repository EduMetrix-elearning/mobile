import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    safeView:{
        flex:1,
        padding:1
    },
    headerViewContainer:{
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"row"
    },
    showIdView:{
        // backgroundColor:"yellow",
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    idHeading:{
       fontWeight:"700",
       fontSize:15,
       letterSpacing:2.5,
       color:"#393e42"
    },
    scoreHeading:{
        marginTop:2
    },
    subMenuContainer:{
        alignItems:"center",
        justifyContent:"center",
        width:"20%"
    },
    submenuImg:{
        height:50,
        width:30
    },
    followingView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        // backgroundColor:"yellow",
        padding:10
    },
    followers:{
        display :"flex",
        flexDirection:"row",
        // backgroundColor:"red",
        padding:2
    },
    numberFollowing:{
        backgroundColor:"skyblue",
        padding:2,
        borderRadius:10
    },
    ProfileView:{
        // backgroundColor:"yellow",
        padding:10,
        display:"flex",
        flexDirection:"row"
    },
    profilePic:{
        // backgroundColor:"yellow",
        padding:2,
        borderRadius:100,
        borderWidth:1,
        borderColor:"red"
    },
    userImg:{
        height:60,
        width:60,
        borderRadius:100
    },
    userDetails:{
        marginLeft:10,
        justifyContent:"center"
    },
    userName:{
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:1,
        color:"#393e42"
    },
    userstate:{
        color:"gray"
    },
    userDob:{
        color:"gray"
    },
    aboutUserView:{
        // backgroundColor:"yellow",
        padding:10
    },
    describe:{
        // backgroundColor:"pink",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    pencil:{
        height:20,
        width:20
    },
    ansDescribeView:{
        // backgroundColor:"yellow",
        marginLeft:15,
        padding:5,
        marginTop:5
    },
    ansDescribe:{
        textAlign:"justify"
    },
    FamilyView:{
        marginLeft:15,
        padding:5,
        marginTop:10,
    },
    family:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"red"
    },
    father:{
        // backgroundColor:"yellow",
        width:"30%",
        alignItems:"flex-start",
        marginLeft:15
    },
    mother:{
        // backgroundColor:"yellow",
        width:"30%",
        alignItems:"flex-start",
        marginLeft:15 
    },
    fatherName:{
        width:"50%",
        alignItems:"flex-start",
        marginLeft:5   
    },
    motherName:{
        marginLeft:5
    },
    family2:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"red",
        marginTop:10
    },
    HobbiesView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10 
    },
    hobbies:{
        marginLeft:32,
        padding:5,
        marginTop:5
    },
    educationalView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10 
    },
    UniversityView:{
        // backgroundColor:"yellow",
        width:"70%",
        marginLeft:5
    },
    collageName:{
        width:"40%",
        alignItems:"flex-start",
        marginLeft:15 
    },
    BioDwldView:{
        // backgroundColor:"red",
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    DwldBtn:{
        marginLeft:10,
        borderWidth:1,
        padding:5,
        borderRadius:5,
        borderColor:"white",
        backgroundColor:"#178BCD"
    },
    dwld:{
       color:"white" ,
       fontWeight:"bold"
    }
})

export default style