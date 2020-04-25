import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    headerContainer:{
        backgroundColor:"#164e64",
        padding:10,
        marginLeft:5,
        marginRight:5
    },
    companyTitleView:{
        alignItems:"center"
    },
    logoWithCompnayView:{
        display:"flex",
        flexDirection:"row",
        padding:5,
        // backgroundColor:"yellow"
    },
    logo:{

    },
    logoImg:{
        height:40,
        width:40
    },
    companyName:{
        marginLeft:10,
        justifyContent:"center"
    },
    companyText:{
        color:"white",
        fontWeight:"bold",
        fontSize:17
    },
    emcView:{
        // backgroundColor:"yellow",
        marginTop:15,
        alignItems:"center"
    },
    amntView:{
        color:"white",
        fontSize:28
    },

    ruppeeView:{
       
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    INRamtView:{
        justifyContent:"center",
        marginLeft:5
    },
    amnt:{
        color:"white",
        fontSize:17
    },
    buttonsView:{
    
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20
    },
    requestTouch:{
        borderWidth:1,
        borderColor:"gray",
        width:"49%",
        padding:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:8
    },
    sendTouch:{
        borderWidth:1,
        borderColor:"gray",
        width:"49%" ,
        padding:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:8
    },
    sendText:{
        fontSize:18,
        color:"white"
    },
    dateView:{
        padding:10,
        backgroundColor:"lightgray",
    },
    date:{
        color:"black",
        fontSize:13,
        letterSpacing:1,  
    },
    TransactionView:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:"lightgray"
    },
    sendView:{
        display:"flex",
        flexDirection:"row",
        
    },
    sendIconView:{
       
        borderRadius:100,
        padding:10,
        borderWidth:1,
        borderColor:"#164e64",
        alignItems:"center",
        justifyContent:"center"
    },
    balanceView:{
        alignItems:"flex-end"
    }
})

export default style