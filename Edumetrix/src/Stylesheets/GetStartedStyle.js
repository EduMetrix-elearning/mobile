import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    GetStartedSafeArea:{
        flex:1,
        // backgroundColor:"red",
        margin:5
    },
    GetStartedContainer:{
        flex:1,
        // backgroundColor:"yellow",
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"center"
    },
    subContainer:{
        // backgroundColor:"pink",
        alignItems:"center",  
        padding:5,
        width:"100%",
        marginBottom:100
    },
    imageView:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    GetStartedImage:{
        height:70,
        width:70
    },
    title:{
        width:"90%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        marginBottom:20
    },
    titleStyle:{
        color:"gray"
    },
    textfieldView:{
        width:"90%",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        padding:4
    },
    dob:{
        color:"gray",
        marginBottom:10
    },
    dropdown:{
        width:"90%"
    },

    countryInput:{
       flexDirection:"row",
       justifyContent:"space-between" ,
       marginTop:20
    },
    countryHeadingView:{
        padding:10,
        alignItems:"center",
        backgroundColor:"#3D94BE",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    countryHeading:{
        color:"white"
    },
    CountryTextDefault:{
        marginBottom:1,
        padding:5,
        // backgroundColor:"red",
        width:"93%",
        color:"gray"
    },
    countryText:{
        
        marginBottom:1,
        padding:5,
        // backgroundColor:"red",
        width:"93%"
    },
    modelView:{
        backgroundColor:"white",
        borderRadius:10,
        marginTop:15,
        marginBottom:15
    },
    modelItemView:{
        padding:10,
        
    },

    nextBtnView:{
        backgroundColor:"#3D94BE",
        width: "90%",
        borderRadius: 80,
        marginTop: 10,
    },
    nextTouch:{
        width:"100%",
        padding:10,
        alignItems:"center",
    },
    conditionsView: {
        
        flexDirection: "row",
        justifyContent:"center"
    },
    dotView: {
        backgroundColor: "gray",
        borderRadius: 100,
        height: 4,
        width: 4,
        marginTop: 10,
        marginLeft:5
    }

})

export default style 